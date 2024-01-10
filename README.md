Tests of Playwrights for Demoblaze Website

This repository contains a full set of Playwright-based end-to-end tests for the Demoblaze website. The Demoblaze website is the testing target, and the tests cover a range of situations to help you better grasp playwright testing.

Prerequisites:
Before running the tests, ensure that you have the following prerequisites installed on your system:

Node.js 
VS Code(recommendable)

Installation

Playwright Test is an extension for Visual Studio Code to run and debug tests.
Install the extension directly from VSCode and then write these commands in terminal:

cd playwright-tests
npm install  # or yarn install

To make sure that the application is running locally or is accessible by writing:

npm test 

CONFIGURATION:

config/config.ts file is  where you can find the configuration.
For any of your particular setup, change the BASE_URL and other variables as necessary for your test.

GOAL:

Validating the Demoblaze website's behavior, finding and resolving any possible problems with user interactions, functionality, and overall user experience are the main goals of this project. Both medium- and high-level scenarios are covered in the tests, which provide a reliable method of feature verification.

RUNNING TESTS: 

The tests are complete and functional; however, one of them displays a failure for the categories section, where the website is not operating correctly. You may use "npx playwright test" in the terminal to test the tests after importing them into your VSCO or another IDME that you are using.

Thank you for your interest in this project! Feel free to reach out for further assistance or contribute to improve these tests.