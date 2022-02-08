import React from "react";
import "./BorderedBox.css";

interface BorderBoxProps {
  gridArea: string;
}

export function BorderedBox(props: BorderBoxProps) {
  return (
    <section style={{ gridArea: props.gridArea }} className="BorderedBox">
      Box
    </section>
  );
}
