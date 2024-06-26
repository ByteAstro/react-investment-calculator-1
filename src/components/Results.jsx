import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ userInput }) {
    const resultData = calculateInvestmentResults(userInput);
    const initalInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;
    // console.log(resultData);

    return (<table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Invested Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initalInvestment;
                const totalAmountInvested =
                    yearData.valueEndOfYear -
                    totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                    <td></td>
                </tr>
            })}
        </tbody>
    </table>
    )
}
