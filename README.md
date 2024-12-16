# Cypress Testing Project

This project demonstrates UI and API testing using **Cypress**.

## Project Structure

- **UI Tests:** Located in `cypress/`
- **API Tests:** Located in `cypress/api_tests/`

## How to Run UI Tests

1. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```
2. Select the UI test file (e.g., `signuppage_cy.js`) from the Cypress Test Runner.

## How to Run API Tests

1. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```
2. Select the API test file (e.g., `api_tests_cy.js`) from the Cypress Test Runner.

## Run Tests in Headless Mode (CLI)

To run tests without opening the UI:

1. Run all tests:
    ```bash
    npx cypress run
    ```

2. Run only the API tests:
    ```bash
    npx cypress run --spec "cypress/api_tests_spec.js"
    ```

3. Run only the UI tests:
    ```bash
    npx cypress run --spec "cypress/signuppage_spec.js"
    ```
