import React from "react";
import ExportForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  let handleAddExpense = props.onAddExpense;
  return (
    <div className="NewExpense">
      <ExportForm onAddExpense={handleAddExpense} />
    </div>
  );
}
