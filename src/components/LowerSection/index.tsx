import { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import "tailwindcss/tailwind.css";

export default function LowerSection() {
  return (
    <div className="upper-container grid grid+-cols-10">
      <table style={{ width: "100%" }}>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  );
}
