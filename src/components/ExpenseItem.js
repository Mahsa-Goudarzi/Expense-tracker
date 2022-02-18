import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  let expense = props.expense;
  let date = expense.date;
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();
  let title = expense.title;
  let amount = expense.amount;

  return (
    <div className="ExpenseItem">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">{amount}</div>
      </div>
    </div>
  );
}
