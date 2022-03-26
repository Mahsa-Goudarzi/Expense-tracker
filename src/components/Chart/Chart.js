import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  let dataPoints = props.dataPoints;
  let dataPointsValues = dataPoints.map((data) => {
    return data.value;
  });
  let totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="Chart">
      {dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          />
        );
      })}
    </div>
  );
}
