import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  // const [isInputValid, setIsInputValid] = useState(true);
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let isInputValid = userInput.duration && userInput.duration >= 1;

  const handleInputChange = (e) => {
    console.log(typeof e.target.value);
    if (e.target.value === '') {
      isInputValid = false;
    } else {
      isInputValid = true;
    }
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [e.target.name]: isInputValid ? parseInt(e.target.value) : 0
      }
    });
  }

  return (<>
    <Header />

    <UserInput
      userInput={userInput}
      handleInputChange={handleInputChange}
    />
    {isInputValid ? (
      <Results userInput={userInput} />
    ) : (
      <p>Please enter a valid values.</p>
    )}

  </>
  )
}

export default App
