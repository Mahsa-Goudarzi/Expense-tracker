import React from "react";

export default function ExpenseDate(props) {
  let date = props.date;
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();
  return (
    <div className="ExpenseDate">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
