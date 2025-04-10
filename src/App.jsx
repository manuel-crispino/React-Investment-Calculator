import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import { calculateInvestmentResults } from "./util/investment";
import Table from "./components/Table";

function App() {
  const [annualData, setAnnualData] = useState([]);
  function handleInputs(inputs) {
    const results = calculateInvestmentResults({
      initialInvestment: +inputs.initialInvestment,
      annualInvestment: +inputs.annualInvestment,
      expectedReturn: +inputs.expectedReturn,
      duration: +inputs.duration,
    });
    setAnnualData(results); // aggiorna lo state
  }
  
  return (
    <>
  <Header/>
  <Inputs onChangeInput={handleInputs}/>
  <Table annualData={annualData} />
  </>
  )
}

export default App
