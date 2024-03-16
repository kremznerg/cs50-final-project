from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from models import Expense
from __init__ import db
from datetime import datetime


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST': 
        category = request.form.get('mainCategory')
        sub_category = request.form.get('subCategory')
        amount = request.form.get('amount')
        date_str = request.form.get('date')

        # Convert date string to datetime object
        date = datetime.strptime(date_str, '%Y-%m-%d').date()  # Convert to date object to remove time component

        # Validation
        if not category or not sub_category or not amount or not date:
            flash('All fields are required!', category='error')
        else:
            # Create a new Expense instance and add it to the database
            new_expense = Expense(category=category, sub_category=sub_category,
                                  amount=float(amount), date=date, user_id=current_user.id)
            db.session.add(new_expense)
            db.session.commit()
            flash('Expense added!', category='success')

    return render_template("index.html", user=current_user)

@views.route('/delete-expense', methods=['POST'])
def delete_expense():  
    expense_data = request.get_json()  # Parse JSON data from the request
    expense_id = expense_data.get('expenseId')
    
    if expense_id:
        expense = Expense.query.get(expense_id)
        
        if expense and expense.user_id == current_user.id:
            db.session.delete(expense)
            db.session.commit()
            return jsonify(success=True)  # Return success message
        
    return jsonify(error='Expense not found or unauthorized'), 400  # Return error message

@views.route('/update-currency', methods=['POST'])
def update_currency():
    if request.method == 'POST':
        currency = request.json.get('currency')

        if current_user:
            current_user.currency = currency
            db.session.commit()
            return 'Currency updated successfully', 200
        else:
            return 'User not logged in', 403
    else:
        return 'Method not allowed', 405
    


