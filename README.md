**Cypress Test**

A suite of automation tests written with JavaScript and automated with Cypress JS framework, for the  API - https://gorest.co.in/

**Project technologies** -

JavaScript as programming language

Node.js as runtime environment

Cypress as automation framework for API automation 


**Setup and installation**

Download and Install nodejs - https://nodejs.org/en/download/prebuilt-installer

Download and Install vscode - https://code.visualstudio.com/download

Open terminal and then execute below command

npm -i init ---> To create package.json file

**To install Cypress** - 

npm install cypress --save -dev

Start cypress

npx cypress open

Configure for new project

Or

After Installation open project QuattAssignment

**Running the project** -

npx cypress run

Run using chrome browser - npx cypress run -- browser chrome

Run using headed mode - npx cypress run -- browser chrome --headed

Run specific spec - npx cypress run --spec cypress\e2e\CreateUser.cy.js -- browser chrome --headed

**Support** -

API support -

https://gorest.co.in/

**Setting up GIT**

To set up Git for this project:

1. **Initialize Git Repository**:
    ```bash
    git init
    ```
2. **Add Files to Git**:
    ```bash
    git add .
    ```

3. **Commit Changes**:
    ```bash
    git commit -m "Initial commit"
    ```

4. **Connect to Remote Repository**:
    Create a new repository on GitHub and connect your local repository to it:
    ```bash
    git remote add origin https://github.com/poorvi26/QUAssignment.git
    ```

5. **Push Changes to Remote Repository**:
    ```bash
    git push -u origin master
    ```

**Project Structure**

Quattassignment 
  - Cypress 
    - e2e - Contains test scripts for CRUD operations of User
      - cypress\e2e\CreateUser.cy.js
      - cypress\e2e\DeleteUser.cy.js
      - cypress\e2e\ReadUser.cy.js
      - cypress\e2e\UpdateUser.cy.js
    - support - Contains all the custom commands and utils
      - cypress\support\commands.js  Custom commands
      - cypress\support\e2e.js -import commands into e2e
      - cypress\support\utils.js - USed to generate random data
 - cypress.config.js - Contains reuasable code of Base URl and auth token


**Test cases** -

cypress\e2e\CreateUser.cy.js - 

Scenario - 01  - Create user test

 - TC -01 - Verify it should create a user successfully

Scenario - 02 -  Create user Negative cases

 - TC - 02 - Verify it should return 401 for authentication failed
 - TC - 03 - Verify it should return 404 for resource not found
 - TC - 04 - Verify it should return 422 for data validation failed

cypress\e2e\UpdateUser.cy.js - 

Scenario - 03 - Update User test

 - TC - 05 - Verify it should update the created user details successfully
 - TC - 06 - Verify it should get the updated user details successfully

cypress\e2e\ReadUser.cy.js - 

Scenario - 04 - Read user test

 - TC - 07 - Verify it should get the created user details successfully
 
Scenario - 05 - Read user negative tests

 - TC - 08 - Verify it should return 401 for authentication failed
 - TC - 09 - Verify it should return 404 for non-existent user

Scenario - 06 - Delete User Test

 - TC - 10 - Verify it should delete the created user successfully
 - TC - 11 - Verify user has been deleted

Scenario - 05 - DELETE user negative Tests

 - TC - 12 - Verify it should return 401 for authentication failed
 - TC - 13 - Verify it should return 404 for non-existent user

![Result](cypress\screenshots\Result.png)




 


