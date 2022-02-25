import React from "react";
import "./Card.css";

export default function Card(props) {
  let classes = "Card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
