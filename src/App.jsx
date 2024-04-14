import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [calulationValues, setCalulationValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })
  let annualData = calculateInvestmentResults(calulationValues);
  let prevInterest = 0;

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setCalulationValues((prevCalulationValues) => {
      return {
        ...prevCalulationValues,
        [e.target.name]: parseInt(e.target.value)
      }
    });
    annualData = calculateInvestmentResults(calulationValues);
    prevInterest = annualData[0].interest;
    // console.log(annualData);
  }

  const calulateTotalInterest = (newYearInterest) => {
    const newTotalInterest = newYearInterest + prevInterest;
    prevInterest = newTotalInterest;
    return newTotalInterest;
  }

  // const annualData = [
  //   { year: 12, investmentValue: 23, interest: 23, valueEndOfYear: 24, annualInvestment: 235 },
  //   { year: 12, investmentValue: 23, interest: 23, valueEndOfYear: 24, annualInvestment: 235 },
  //   { year: 12, investmentValue: 23, interest: 23, valueEndOfYear: 24, annualInvestment: 235 },
  // ];

  return (<>
    <div id="header">
      <img src="/investment-calculator-logo.png" alt="" />
      <h1>React Investment Calculator</h1>
    </div>

    <div id="user-input">
      <div className="input-group">
        <label>INITIAL INVESTMENT
          <input type="number" name="initialInvestment"
            onChange={handleInputChange} value={calulationValues.initialInvestment} />
        </label>
        <label>ANNUAL INVESTMENT
          <input type="number" name="annualInvestment"
            onChange={handleInputChange} value={calulationValues.annualInvestment} />
        </label>
      </div>
      <div className="input-group">
        <label>EXPECTED RETURN
          <input type="number" name="expectedReturn"
            onChange={handleInputChange} value={calulationValues.expectedReturn} />
        </label>
        <label>DURATION
          <input type="number" name="duration"
            onChange={handleInputChange} value={calulationValues.duration} />
        </label>
      </div>
    </div>

    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((eachYearData, idx) => {
          return <tr key={idx}>
            <td>{eachYearData.year}</td>
            <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
            <td>{formatter.format(eachYearData.interest)}</td>
            <td>{formatter.format(
              calulateTotalInterest(eachYearData.interest)
            )}</td>
            <td>{formatter.format(
              eachYearData.valueEndOfYear - prevInterest
            )}</td>
          </tr>
        })}
      </tbody>
    </table>
  </>
  )
}

export default App
