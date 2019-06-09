import React from "react";

const table = ({ tableData }) => (
  <section className="frameworks" data-sr="wait 0.3s, enter right">
    <h1 className="green">&lt; {tableData.title} &gt;</h1>
    <table className="frameworks">
      <tbody>
        {tableData &&
          tableData.data.map((row, index) => (
            <tr key={row.title}>
              <td>{index}.</td>
              <td>{row.title}</td>
              <td>-</td>
              <td>{row.desc}</td>
            </tr>
          ))}
      </tbody>
    </table>
    <h1 className="green">&lt; / {tableData.title} &gt; </h1>
  </section>
);

export default table;
