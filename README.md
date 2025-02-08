Health Challenge Tracker
A single-page application (SPA) built using Angular 14+ to track users' workout activities, including workout types and minutes. It allows users to:

Add workout details (user name, workout type, and workout minutes)
View and manage workouts with search, filter, and pagination functionalities
Display workout progress using charts
Store data locally using localStorage
This project was built as part of a frontend development challenge and demonstrates practical skills in Angular, Tailwind CSS, and unit testing.

Features
User Input: Add user name, workout type, and workout minutes.
Search: Search for workouts by user name.
Filter: Filter workouts by workout type (Running, Cycling, Swimming, etc.).
Pagination: Pagination for displaying user workouts when there are more than 5 users.
Charts : Visualize the workout progress with charts.
Unit Testing: 100% test coverage for the component and service.
Responsive Design: Built with Tailwind CSS for a responsive, modern UI.
Getting Started
Prerequisites
Before you begin, ensure that you have the following installed:

Node.js (version 14 or higher)
npm (Node Package Manager)
To check if you have Node.js and npm installed, run the following command in your terminal:
node -v
npm -v
If you don't have them installed, you can download and install Node.js 

Cloning the Repository
Clone the GitHub repository to your local machine:
git clone https://github.com/saketh1804/health-challenge-tracker.git
Install Dependencies
Navigate into the project directory and install the required dependencies:

cd health-challenge-tracker
npm install
Run the Project Locally
To run the project locally, use the following command:
ng serve
Once the application is compiled, open your browser and go to:
http://localhost:4200
Unit Tests
Test Overview
Unit tests have been written for:

Component: add-workout.component.spec.ts
Service: workout.service.ts
Running Tests
To run the unit tests, use the following command:
ng test
This will launch the Karma test runner and execute all tests, showing the results in the terminal.

Code coverage :

Component: add-workout.component.spec.ts
Service: workout.service.ts
The unit tests ensure that all major functionalities in these parts of the application are correctly implemented. After running the tests using Jasmine and Karma, the overall code coverage is 100%, ensuring full test coverage for both the component and service.

Test Coverage Report:
File	                            % Coverage
add-workout.component.spec.ts	    100%
workout.service.ts	                100%
Test Results:
Statements: 100%
Branches: 100%
Functions: 100%
Lines: 100%

Technologies Used
Angular 14+: The framework for building the SPA.
Tailwind CSS: A utility-first CSS framework for styling the application.
localStorage: For persisting user data (workout details) on the client side.
Karma and Jasmine: For running unit tests and ensuring 100% code coverage.
Assumptions
The project assumes that the user has at least basic knowledge of Angular and front-end web development practices.
The data is stored locally in localStorage to persist it across page reloads.
The project does not require a backend server; all data handling is done on the client side.
Pagination is applied when there are more than 5 users.
The charting feature.

Deployed Web App
The live version of the app is hosted on Netlify and can be accessed here:

Live Web App

GitHub Repository
You can find the source code and the full project repository here:

GitHub Repository
