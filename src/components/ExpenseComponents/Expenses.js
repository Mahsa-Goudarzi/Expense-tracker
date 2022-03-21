import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  let expenses = props.expenses;
  return (
    <Card className="Expenses">
      <ExpensesList expenses={expenses} />
    </Card>
  );
}
