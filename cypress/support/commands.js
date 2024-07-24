// cypress/support/commands.js

// Custom command to create a user
Cypress.Commands.add('createUser', (userData) => {
    return cy.request({
      method: 'POST',
      url: '/users', // Relative path
      headers: {
        Authorization: `Bearer ${Cypress.env('GOREST_API_TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: userData,
    }).then((response) => {
      return response;
    });
  });
  
  // Custom command to get a user by ID
Cypress.Commands.add('getUser', (userId) => {
    return cy.request({
      method: 'GET',
      url: `/users/${userId}`,
      headers: {
        Authorization: `Bearer ${Cypress.env('GOREST_API_TOKEN')}`, 
      },
      failOnStatusCode: false,
    }).then((response) => {
      return response;
    });
  });


  // Custom command to update a user by ID
Cypress.Commands.add('updateUser', (userId, updatedData) => {
    return cy.request({
      method: 'PUT',
      url: `/users/${userId}`, // Relative path to baseUrl
      headers: {
        Authorization: `Bearer ${Cypress.env('GOREST_API_TOKEN')}`, // API token from environment variables
        'Content-Type': 'application/json',
      },
      body: updatedData,
    }).then((response) => {
      return response;
    });
  });

  // Custom command to delete a user by ID
Cypress.Commands.add('deleteUser', (userId) => {
    return cy.request({
      method: 'DELETE',
      url: `/users/${userId}`, 
      headers: {
        Authorization: `Bearer ${Cypress.env('GOREST_API_TOKEN')}`, 
      },
    }).then((response) => {
      return response;
    });
  });


  // Custom command to create a user with different error scenarios
Cypress.Commands.add('createUserWithError', (userData, token, failOnStatusCode = true) => {
    return cy.request({
      method: 'POST',
      url: '/users', 
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: userData,
      failOnStatusCode: failOnStatusCode,
    }).then((response) => {
      return response;
    });
  });

  // Custom command to get a user with different error scenarios
Cypress.Commands.add('getUserWithError', (userId, token, failOnStatusCode = true) => {
    return cy.request({
      method: 'GET',
      url: `/users/${userId}`, 
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      failOnStatusCode: failOnStatusCode,
    }).then((response) => {
      return response;
    });
  });
  
  // Custom command to delete a user with different error scenarios
  Cypress.Commands.add('deleteUserWithError', (userId, token, failOnStatusCode = true) => {
    return cy.request({
      method: 'DELETE',
      url: `/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      failOnStatusCode: failOnStatusCode,
    }).then((response) => {
      return response;
    });
  });
  