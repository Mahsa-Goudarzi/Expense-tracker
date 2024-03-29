import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  let expense = props.expense;
  let date = expense.date;
  let title = expense.title;
  let amount = expense.amount;

  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${amount}</div>
      </div>
    </Card>
  );
}
