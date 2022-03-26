import React from "react";
import "./ChartBar.css";

export default function ChartBar(props) {
  let value = props.value;
  let maxValue = props.maxValue;
  let label = props.label;
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="ChartBar">
      <div className="ChartBar-inner">
        <div className="ChartBar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="ChartBar-label">{label}</div>
    </div>
  );
}
