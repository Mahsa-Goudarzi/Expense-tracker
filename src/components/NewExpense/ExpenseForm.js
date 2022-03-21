import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExportForm(props) {
  let handleAddExpense = props.onAddExpense;
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleTitleChange(event) {
    setInputTitle(event.target.value);
  }

  function handleAmountChange(event) {
    setInputAmount(event.target.value);
  }

  function handleDateChange(event) {
    setInputDate(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    handleAddExpense(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  }

  return (
    <form className="ExpenseForm" onSubmit={handleFormSubmit}>
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={handleTitleChange} />
        </div>
        <div className="expense-form-control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="expense-form-control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="expense-form-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
