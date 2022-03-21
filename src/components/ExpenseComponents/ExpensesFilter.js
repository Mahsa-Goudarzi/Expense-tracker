import React from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  let selectedYear = props.selected;
  let handleFilterChange = props.onFilterChange;

  function handleDropdownChange(event) {
    handleFilterChange(event.target.value);
  }

  return (
    <div className="ExpensesFilter">
      <div className="ExpensesFilter-control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={handleDropdownChange}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
