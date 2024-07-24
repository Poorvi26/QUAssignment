// cypress/e2e/createAndGetUser.spec.js

import { generateRandomUserData } from '../support/utils';

//Scenario - 04
describe('Read user test', () => {
  let createdUserId;
  let createdUserName;
  let createdUserEmail;
  let createdUserGender;
  let createdUserStatus;

  before(() => {
    // Generate random user data
    const userData = generateRandomUserData();

    // Create a user and save the ID
    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201); // 201 Created
      createdUserId = response.body.id;
      createdUserName = response.body.name;
      createdUserEmail = response.body.email;
      createdUserGender = response.body.gender;
      createdUserStatus = response.body.status;
    });
  });

  //TC - 07
  it('Verify it should get the created user details successfully', () => {
    // Ensure createdUserId is defined
    expect(createdUserId).to.exist;

    cy.getUser(createdUserId).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('id', createdUserId);
      expect(response.body).to.have.property('name',createdUserName);
      expect(response.body).to.have.property('email',createdUserEmail);
      expect(response.body).to.have.property('gender',createdUserGender);
      expect(response.body).to.have.property('status',createdUserStatus);
    });
  });
});

//Scenario - 05
describe('Read user negative tests ', () => {
  const validToken = Cypress.env('GOREST_API_TOKEN');
  const invalidToken = 'invalid_token';
  const nonExistentUserId = 123456789;

  context('GET /users/:id', () => {

    //TC - 08
    it('Verify it should return 401 for authentication failed', () => {
      cy.getUserWithError(nonExistentUserId, invalidToken, false).then((response) => {
        expect(response.status).to.eq(401); // 401 Unauthorized
      });
    });
    
    //TC- 09
    it('Verify it should return 404 for non-existent user', () => {
      cy.getUserWithError(nonExistentUserId, validToken, false).then((response) => {
        expect(response.status).to.eq(404); // 404 Not Found
      });
    });
  });
})