Playwright TypeScript BDD-Cucumber Test Automation Framework

This E2E BDD Test Automation Framework in TypeScript is using (Playwright and BDD-cucumber).
Languages: TypeScript
Build/Dependency Management: npm
Testing Frameworks: Playwright
BDD Library: Cucumber
Reporting: cucumber-html-reporter

Pre-requisites:
Install latest Node.JS
Install latest Visual Studio Code
Setup Project
Clone the source code from git as per below command.
git clone <https://github.com/prakadeesh26/latest.git>
Import the Project into Visual Studio Code
Open Terminal and Navigate to Project Directory
Run npm install to download all the dependencies / libraries.
Run npm run npm test to run the test
The HTML report generates automatically and stores in test-results/cucumber-report.html
Run open test-results/cucumber-report.html to open the report

Results:
cucumber-report.html

The reports folders will be created under automatically after first run.

Questions

How did you decide on the structure and framework of your solution?

The simple Playwright TypeScript Cucumber Framework was chosen to provide a quick setup recipe and reusable solution for the users.
Feature files are written in simple English using the npm package -cucumber-preprocessor. (Folder - tests/Features)
The framework follows - Page Object design pattern to manage the Page Object separately, which helps with easy maintenance and code reusability. (Folder - /pages)
The Step Definition carries a function block with an expression that links it to one or more Gherkin steps. (Folder - tests/steps)
The data driven approach (JSON file - data/australiaData.json) was used to pass user data to every test case. It helps with reusability, maintainability, broader test coverage and better use of human skills.
The Cucumber html report is a simple HTML report which helps with Test Summary and Failure reason. It doesn't save the screenshot but carries information about the assertions and errors.

Are there any improvements you could make to your submission?

I can add more details in the framework and optimize to make it more robust and dynamic.
As of now, I have implemented whatever was possible in the available time frame, but it’s a simple recipe which is easy to understand, implement, and fit for the purpose.
I won't say it is a complete framework solution because I believe quality checks, automation and improvements are an ongoing process.

What did you think of this challenge?

Usually, QA challenges are typical where the companies asked to automate few scenarios for any Demo Application.
Those challenges can only test a limited knowledge on Web automation.
But I found this challenge from this website where wide range of challenges with different complexities are available on single page (majority of automation use cases).
In my projects, I haven’t got a chance to work on few use cases given in the challenges.
And this gave me an opportunity to learn new things.
Overall, I really loved the challenge and going to use this opportunity to automate remaining use cases for my self-learning.
