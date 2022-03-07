import React from "react";
import "./ExpenseForm.css";

export default function ExportForm() {
  return (
    <form className="ExpenseForm">
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="expense-form-control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="expense-form-control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="expense-form-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
