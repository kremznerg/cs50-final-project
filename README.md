# Gábor's Personal Finance Tracker
#### Video Demo:  <https://youtu.be/eRMCzqvcFp8>
#### Description:

The Finance Tracker Web App is designed to help users track their expenses and manage their finances effectively. It provides a user-friendly interface for recording expenses, categorizing them, and visualizing spending patterns. With features like dynamic dropdowns for category selection, real-time balance calculation, and user authentication, the web app offers a comprehensive solution for personal finance management.

## Functionality Overview:

### 1. Expense Input:
Users can input their expenses by selecting a main category, a corresponding sub-category, entering the amount, and specifying the date of the expense. The app provides a user-friendly interface for easy and quick data entry.

### 2. Real-time Balance Calculation:
The web app calculates and displays the total balance based on the entered expenses. It updates dynamically as users add or delete expenses, providing instant feedback on their financial status.

### 3. User Authentication:
To ensure data privacy and security, the web app incorporates user authentication functionality. Users can create an account, log in securely, and access their personal expense records.

### 4. Currency Selection:
Users have the option to select their preferred currency for displaying expense amounts. The selected currency is stored per user and persists across sessions.

## File Structure and Functionality:

### 1. `static/index.js`:
This JavaScript file contains client-side logic for dynamic dropdown population, expense deletion, and total balance calculation. It enhances user interaction and functionality within the web app's frontend.

### 2. `website/templates/`:
This directory contains HTML templates for rendering the web pages. Templates include forms for expense entry, expense list display, user authentication pages (login and sign-up), and base HTML layout.

### 3. `website/__init__.py`:
This Python file initializes the Flask application, configures the database, and registers blueprints for views and authentication. It also implements user authentication using Flask-Login and defines database models for User and Expense entities.

### 4. `website/auth.py`:
The `auth.py` module handles user authentication functionality within the Finance Tracker Web App. It consists of routes and functions responsible for user login, logout, and account registration.


### 5. `website/models.py`:
This Python script defines database models using SQLAlchemy. It includes models for users and expenses, establishing relationships between them.

### 6. `website/views.py`:
This Python script contains route definitions for different endpoints of the web application. It handles tasks such as rendering templates, processing form submissions, adding and deleting expenses, and updating user currency preferences.

### 7. `main.py`:
This Python script serves as the entry point for running the Flask web application. It creates the Flask app instance using the `create_app()` function from `website/__init__.py` and starts the development server.

## Conclusion:

The Finance Tracker Web App offers a convenient and secure platform for managing personal finances. By providing robust expense tracking, real-time balance calculation, and user authentication features, the app empowers users to take control of their financial health. Whether tracking daily expenses, monitoring spending habits, or planning budgets, the web app serves as a valuable tool for financial management.
