
const currency = "KES";
const appName = "SpendWise";

let monthlyBudget = Number(localStorage.getItem("monthlyBudget")) || 0;

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

console.log("Welcome to " + appName);
console.log("Currency:", currency);


const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");

const budgetTotal = document.getElementById("budget-total");
const expensesTotal = document.getElementById("expenses-total");
const remainingBalance = document.getElementById("remaining-balance");
const budgetStatus = document.getElementById("budget-status");
const expenseList = document.getElementById("expense-list");


function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

function saveBudget() {
    localStorage.setItem("monthlyBudget", monthlyBudget);
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}


function calculateBudgetUsage(budget, totalExpenses) {
    return (totalExpenses / budget) * 100;
}


function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

function updateCategoryCards() {

    const categories = [
        "Food",
        "Transport",
        "Rent",
        "Entertainment",
        "Utilities",
        "Other"
    ];

    for (let category of categories) {

        let categoryTotal = 0;

        for (let expense of expenses) {

            if (expense.category === category) {
                categoryTotal += expense.amount;
            }
        }

        const categoryCard = document.getElementById(
            "category-" + category.toLowerCase()
        );

        categoryCard.textContent = formatCurrency(categoryTotal);
    }
}


function formatCurrency(amount) {
    return currency + " " + amount.toLocaleString("en-KE", {
        maximumFractionDigits: 2
    });
}


function updateDashboard() {

    const total = calculateTotalExpenses();
    const balance = calculateRemainingBalance(monthlyBudget, total);

    budgetTotal.textContent = formatCurrency(monthlyBudget);
    expensesTotal.textContent = formatCurrency(total);
    remainingBalance.textContent = formatCurrency(balance);

    if (monthlyBudget <= 0) {
        budgetStatus.textContent = "Set your monthly budget to get started.";

    } else if (total > monthlyBudget) {
        budgetStatus.textContent = "You have exceeded your monthly budget!";

    } else if (calculateBudgetUsage(monthlyBudget, total) >= 80) {
        budgetStatus.textContent = "Warning! You have used 80% or more of your budget.";

    } else {
        budgetStatus.textContent = "Great job! You are within your budget.";
    }
}


function displayExpenses() {

    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "No expenses added yet.";
        expenseList.appendChild(emptyMessage);
        return;
    }

    for (let expense of expenses) {

        const listItem = document.createElement("li");

        listItem.textContent =
            expense.description + " - " +
            expense.category + " - " +
            formatCurrency(expense.amount);

        expenseList.appendChild(listItem);
    }
}


budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredBudget = Number(
        document.getElementById("monthly-budget").value
    );

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        budgetStatus.textContent = "Please enter a valid budget.";
        return;
    }

monthlyBudget = enteredBudget;

saveBudget();

updateDashboard();

budgetForm.reset();

console.log("Monthly budget:", monthlyBudget, currency);
});


expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (monthlyBudget <= 0) {
        budgetStatus.textContent = "Please set your monthly budget first.";
        return;
    }

    const description = document.getElementById("expense-description").value.trim();
    const category = document.getElementById("expense-category").value;
    const amount = Number(document.getElementById("expense-amount").value);

    if (
        description === "" ||
        category === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        budgetStatus.textContent = "Please enter valid expense information.";
        return;
    }

    const newExpense = {
        description: description,
        category: category,
        amount: amount
    };

expenses.push(newExpense);

saveExpenses();

displayExpenses();
updateDashboard();
updateCategoryCards();

    expenseForm.reset();

    console.log("New expense added:", newExpense);
});


updateDashboard();
displayExpenses();
updateCategoryCards();
