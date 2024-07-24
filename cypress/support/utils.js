
// cypress/support/utils.js

export const generateRandomUserData = () => {
    return {
      name: `User ${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
      gender: 'female', // or 'male'
      status: 'active',
    };
  };
  
// Utility function to generate new data for updating a user
export const generateNewUserData = () => {
    return {
      name: `Updated User ${Math.floor(Math.random() * 1000)}`,
      email: `updateduser${Math.floor(Math.random() * 1000)}@example.com`,
      gender: 'male', // Changing gender for update example
      status: 'inactive',
    };
  };
  