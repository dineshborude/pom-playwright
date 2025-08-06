# Playwright POM Test

This repository contains an example of how to write SDET tests using Playwright.

## Folder Structure

The folder structure is as follows:

* `pages/`: Contains the page objects for the application.
* `tests/`: Contains all the test files.
* `playwright.config.ts`: The Playwright configuration file.
* `.env`: Stores environment-specific credentials and base URL.
* `package.json`: Project dependencies and scripts.
* `README.md`: This file.

## Pages Folder

The `pages/` folder contains reusable classes for each screen/page. It uses the Page Object Model (POM) design pattern.

### login.ts

Handles login functionality:

* `visitPage()`: Visits the login page.
* `loginFunction()`: Performs login using the provided URL, username, and password.

Takes URL, username, and password from `.env`.

### amountTest.ts

Contains functions to test mix amount & percentage, total amount, and total percentage calculations.

Methods like:

* `navigateToCommisionAdjusting()`: Navigates to the commission adjusting module.
* `mixAmountAndPercentage()`: Mixes amount and percentage.
* `makeTotalAmount()`: Calculates total amount.
* `makeTotalPercentage()`: Calculates total percentage.

## Tests Folder

The `tests/` folder contains all test files. Every file corresponds to a module or group of related tests.

### amountAdjust.spec.ts

Uses `beforeEach` to:

* Navigate to login page
* Perform login
* Reach the commission adjusting module

Includes 3 test cases:

* Mix amount and percentage
* Total amount calculation
* Total percentage calculation

`afterEach` can be added for cleanup, screenshots on failure, etc.

### allTests.spec.ts

This file imports and executes all test suites.

Acts as a single entry point to run all the Playwright tests together.

## Hooks Used

* `beforeEach`: Sets up browser page, logs in user, and navigates to target module before each test.
* `afterEach` (recommended to include): Can be used to take a screenshot on failure, log test status, clear cookies/storage, etc.

## Reporters Used

Configured in `playwright.config.ts`.

* `list`: CLI summary
* `html`: Generates a beautiful UI report in `playwright-report/`
* `json`: Machine-readable report format

To view the HTML report:

`npx playwright show-report`

## Run Single Test File

To run the test file individually (e.g. `amountAdjust.spec.ts`):

`npx playwright test tests/amountAdjust.spec.ts`

To run all tests from `allTests.spec.ts`:

`npx playwright test tests/allTests.spec.ts`

## Environment Setup

Create a `.env` file:

```
BASE_URL=https://bolt.playrealbrokerage.com/login
USERID=sahilagent
PASSWORD=P@ssw0rd
