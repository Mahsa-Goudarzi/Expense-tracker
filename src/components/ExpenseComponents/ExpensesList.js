import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  let expenses = props.expenses;

  if (expenses.length === 0) {
    return <h2 className="ExpensesList-fallback">No expenses found</h2>;
  }

  return (
    <div className="ExpensesList">
      {expenses.map(function (item) {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </div>
  );
}
