import React, { useState } from "react"

export default function Inputs({onChangeInput}) {
  const [input, setInput] = useState({
    initialInvestment: "",
    expectedReturn: "",
    annualInvestment: "",
    duration: ""
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
    onChangeInput({ ...input, [name]: value })
    console.log("updated input: ", { ...input, [name]: value });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            name="initialInvestment"
            onChange={handleOnChange}
            type="number"
            value={input.initialInvestment}
          />

          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            name="expectedReturn"
            onChange={handleOnChange}
            type="number"
            value={input.expectedReturn}
          />
        </div>

        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            onChange={handleOnChange}
            type="number"
            value={input.annualInvestment}
          />

          <label htmlFor="duration">Duration</label>
          <input
            name="duration"
            onChange={handleOnChange}
            type="number"
            value={input.duration}
          />
        </div>
      </div>
    </div>
  );
}
