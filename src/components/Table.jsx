import { formatter } from "../util/investment";
import React from "react";


export default function Table({ annualData }) {

    let totalInterest = 0;
    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData && annualData.length > 0 ? (
            annualData.map((item, index) => {
                 totalInterest +=item.interest;
                
              return (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{formatter.format(item.valueEndOfYear)}</td>
                  <td>{formatter.format(item.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(item.valueEndOfYear-totalInterest)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="center" colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  