import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  let expenses = props.expenses;
  return expenses.map(function (item) {
    return <ExpenseItem key={item.id} expense={item} />;
  });
}
