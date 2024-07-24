

import { generateRandomUserData } from '../support/utils';

//Scenario - 01 
describe('Create user test', () => {
  //TC-01
  it('Verify it should create a user successfully', () => {
    const userData = generateRandomUserData(); // Use utility function for data

    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201); 
      expect(response.body).to.have.property('name', userData.name);
      expect(response.body).to.have.property('email', userData.email);
      expect(response.body).to.have.property('gender', userData.gender);
      expect(response.body).to.have.property('status', userData.status);
    });
  });
});

//Scenario - 02
describe('Create user Negative cases', () => {
  const validToken = Cypress.env('GOREST_API_TOKEN');
  const invalidToken = 'invalid_token';
  const baseUrl = Cypress.config('baseUrl');

  //TC - 02
  it('Verify it should return 401 for authentication failed', () => {
    cy.createUserWithError({}, invalidToken, false).then((response) => {
      expect(response.status).to.eq(401); // 401 Unauthorized
    });
  });

  //TC - 03
  it('Verify it should return 404 for resource not found', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/invalid_endpoint`,
      headers: {
        Authorization: `Bearer ${validToken}`,
        'Content-Type': 'application/json',
      },
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404); 
    });
  });


//TC - 04
  it('Verify it should return 422 for data validation failed', () => {
    cy.createUserWithError({ name: '' }, validToken, false).then((response) => {
      expect(response.status).to.eq(422); // 422 Unprocessable Entity
    });
    cy.createUserWithError({ email: '' }, validToken, false).then((response) => {
      expect(response.status).to.eq(422); // 422 Unprocessable Entity
      cy.createUserWithError({ gender: '' }, validToken, false).then((response) => {
        expect(response.status).to.eq(422); // 422 Unprocessable Entity
        cy.createUserWithError({ status: '' }, validToken, false).then((response) => {
          expect(response.status).to.eq(422); // 422 Unprocessable Entity
        });
    });
  });
});
})
