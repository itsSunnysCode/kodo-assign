import React from "react";
import styles from "./DataTable.module.css";
import { formattedDate } from "../../utils/dateFormat";
function DataTable({ items }) {
  return (
    <div className={styles.wrapper}>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Last Edited</th>
          </tr>
          {items?.map((d) => {
            return (
              <tr key={d.name}>
                <td>{d.name}</td>
                <td>{d.description}</td>
                <td>{formattedDate(d.dateLastEdited) || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
