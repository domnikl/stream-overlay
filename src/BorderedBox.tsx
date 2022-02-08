import React from "react";
import "./BorderedBox.css";

interface BorderBoxProps {
  title: string;
  gridArea: string;
}

export function BorderedBox(props: BorderBoxProps) {
  return (
    <section style={{ gridArea: props.gridArea }} className="BorderedBox">
      {props.title}
      <div className="ColoredBorder"></div>
    </section>
  );
}
