from __init__ import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100))
    sub_category = db.Column(db.String(100))
    amount = db.Column(db.Float)  # Assuming the amount will be a floating-point number
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    currency = db.Column(db.String(3))
    expenses = db.relationship('Expense')
