

import { generateRandomUserData, generateNewUserData } from '../support/utils';

//Scenario - 03
describe('Update User test', () => {
  let createdUserId;
  let newUserData;

  before(() => {
    // Generate random user data
    const userData = generateRandomUserData();

    // Create a user and save the ID
    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201); // 201 Created
      createdUserId = response.body.id; // Save the created user ID
    });
  });

  //TC-05
  it('Verify it should update the created user details successfully', () => {
    // Ensure createdUserId is defined
    expect(createdUserId).to.exist;

    // Generate new user data for update
    newUserData = generateNewUserData();

    // Update the user
    cy.updateUser(createdUserId, newUserData).then((response) => {
      expect(response.status).to.eq(200); // 200 OK
      expect(response.body).to.have.property('id', createdUserId);
      expect(response.body).to.have.property('name', newUserData.name);
      expect(response.body).to.have.property('email', newUserData.email);
      expect(response.body).to.have.property('gender', newUserData.gender);
      expect(response.body).to.have.property('status', newUserData.status);
    });
  });
 //TC - 06
  it('Verify it should get the updated user details successfully', () => {
    // Ensure createdUserId is defined
    expect(createdUserId).to.exist;

    cy.getUser(createdUserId).then((response) => {
      expect(response.status).to.eq(200); // 200 OK
      expect(response.body).to.have.property('id', createdUserId);
      expect(response.body).to.have.property('name', newUserData.name);
      expect(response.body).to.have.property('email', newUserData.email);
      expect(response.body).to.have.property('gender', newUserData.gender);
      expect(response.body).to.have.property('status', newUserData.status);
    });
  });
});
