import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  let expenses = props.expenses;
  return (
    <Card className="Expenses">
      {expenses.map(function (item) {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </Card>
  );
}
