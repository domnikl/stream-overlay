import React from "react";
import "./BorderedBox.css";

interface BorderBoxProps {
  title: string;
  gridArea: string;
}

export function BorderedBox(props: BorderBoxProps) {
  return (
    <section style={{ gridArea: props.gridArea }} className="BorderedBox">
      <div className="ColoredTitle">{props.title}</div>
      <div className="ColoredBorder"></div>
    </section>
  );
}
