import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="ExpenseItem">
      <div>Date</div>
      <div className="expense-item-description">
        <h2>Title</h2>
        <div className="expense-item-price">Amount</div>
      </div>
    </div>
  );
}
