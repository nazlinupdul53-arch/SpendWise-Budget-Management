# SpendWise – Interactive Budget Management

## Project Description

SpendWise is an interactive budget management application that allows users to set a monthly budget, record expenses, calculate their remaining balance, and monitor their spending through a dynamic dashboard.

## JavaScript Concepts Used

### Variables and Constants

Used `let` and `const` to store the application name, currency, monthly budget, and expense records.

### Arrays

Used an array called `expenses` to store multiple expense records. Each expense contains a description, category, and amount.

### Loops

Used `for...of` loops to calculate total expenses, process expense records, and calculate spending for different categories.

## Functions and Calculations

Created reusable functions to:
- Calculate the remaining balance.
- Calculate budget usage.
- Calculate total expenses.
- Update the category cards.
- Display expense records.

## Conditional Statements

Used `if...else` statements to validate user input and determine the budget status. The application displays different messages when spending is within budget, reaches 80% or more of the budget, or exceeds the monthly budget.

## DOM Manipulation

Used JavaScript DOM methods to display and update the monthly budget, total expenses, remaining balance, budget status, expense history, and category spending directly on the webpage.

## Event Listeners

Used `addEventListener()` to handle budget and expense form submissions. These events allow users to save their budget and add expenses without reloading the webpage.

## Data Validation

Used conditional statements and HTML form validation to ensure users enter valid budget and expense information.

# Challenges and Solutions

One challenge was updating the category cards to display actual expense totals instead of fixed values. This was solved by creating an `updateCategoryCards()` function that calculates spending for each category.

Another challenge was ensuring that the dashboard updates whenever a user adds an expense. This was solved by connecting event listeners to the functions responsible for updating the dashboard and displaying expense records.

# Technologies Used

- HTML
- CSS
- JavaScript
- Browser localStorage

## GitHub Repository

The complete source code for this project is available on GitHub.

Repository Link: https://github.com/nazlinupdul53-arch/SpendWise-Budget-Management

## Live Website

Netlify Deployment Link: https://incomparable-twilight-612210.netlify.app

## Deployment Summary

The SpendWise application was successfully deployed using Netlify and made publicly accessible online. The project files are stored in a GitHub repository. The deployment process helped me practise version control, website hosting and deployment management.

# Lessons Learned

Through this project, I improved my understanding of HTML, CSS and JavaScript. I learned how to create an interactive web application, manipulate webpage elements using the DOM, handle user input, validate data and store information using browser localStorage.


I also gained experience preparing a project for deployment using GitHub and Netlify.
