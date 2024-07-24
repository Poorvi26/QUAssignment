// cypress/e2e/deleteUser.spec.js

import { generateRandomUserData } from '../support/utils';

//Scenario - 06
describe('Delete User Test', () => {
  let createdUserId;
  

  before(() => {
    // Generate random user data
    const userData = generateRandomUserData();
    const nonExistentUserId = 123456789;

    // Create a user and save the ID
    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201); // 201 Created
      createdUserId = response.body.id; // Save the created user ID
    });
  });

  //TC - 10
  it('Verify it should delete the created user successfully', () => {
    // Ensure createdUserId is defined
    expect(createdUserId).to.exist;

    // Delete the user
    cy.deleteUser(createdUserId).then((response) => {
      expect(response.status).to.eq(204); // 204 No Content, successful deletion
    });
  });

  //TC - 11
  it('Verify user has been deleted', () => {
    // Ensure createdUserId is defined
    expect(createdUserId).to.exist;

    // Try to get the deleted user with failOnStatusCode set to false
    cy.getUser(createdUserId, false).then((response) => {
      expect(response.status).to.eq(404); // 404 Not Found, user should not exist
    });
  });
});

//Scenario - 07
describe('DELETE user negative Tests', () => {
  const validToken = Cypress.env('GOREST_API_TOKEN');
  const invalidToken = 'invalid_token';
  const nonExistentUserId = 123456789;

context('DELETE /users/:id', () => {

  // TC- 12
  it('Verify it should return 401 for authentication failed', () => {
    cy.deleteUserWithError(nonExistentUserId, invalidToken, false).then((response) => {
      expect(response.status).to.eq(401); // 401 Unauthorized
    });
  });

 // TC- 13
  it('Verify it should return 404 for non-existent user', () => {
    cy.deleteUserWithError(nonExistentUserId, validToken, false).then((response) => {
      expect(response.status).to.eq(404); // 404 Not Found
    });
  });
});
});

