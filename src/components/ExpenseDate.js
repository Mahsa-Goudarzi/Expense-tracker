import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  let date = props.date;
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();
  return (
    <div className="ExpenseDate">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
}
