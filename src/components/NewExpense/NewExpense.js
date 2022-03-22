import React, { useState } from "react";
import ExportForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [inputFormOn, setInputFormOn] = useState(false);
  let handleAddExpense = props.onAddExpense;

  function handleFormClick() {
    setInputFormOn((prevState) => !prevState);
  }

  if (inputFormOn) {
    return (
      <div className="NewExpense">
        <ExportForm
          onAddExpense={handleAddExpense}
          onCancel={handleFormClick}
        />
      </div>
    );
  }

  return (
    <div className="NewExpense">
      <button onClick={handleFormClick}>Add new Expense</button>
    </div>
  );
}
