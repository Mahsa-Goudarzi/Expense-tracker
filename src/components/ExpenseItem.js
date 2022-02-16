import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  let expense = props.expense;
  let date = expense.date.toISOString();
  let title = expense.title;
  let amount = expense.amount;

  return (
    <div className="ExpenseItem">
      <div>{date}</div>
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">{amount}</div>
      </div>
    </div>
  );
}
