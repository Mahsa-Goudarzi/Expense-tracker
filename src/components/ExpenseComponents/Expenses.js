import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function handleFilterChange(selectedYear) {
    setFilteredYear(selectedYear);
  }

  let expenses = props.expenses;
  return (
    <Card className="Expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}
