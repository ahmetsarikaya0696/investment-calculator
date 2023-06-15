import React from "react";
import styles from "./Table.module.css";

const Table = (props) => {
  const datas = props.data;

  return (
    <div>
      {datas.length === 0 && <div className={styles.card}>No investment calculated yet</div>}
      {datas.length !== 0 && (
        <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear + " $"}</td>
                <td>{data.yearlyInterest + " $"}</td>
                <td>{data.totalInterest + " $"}</td>
                <td>{data.investedCapital + " $"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
