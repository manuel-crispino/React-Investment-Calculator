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
    if (value < 1 && value !== "") return alert("0 and negative numbers are not allowed");
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
            min={1}
            type="number"
            value={input.initialInvestment}
            required
          />

          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            name="expectedReturn"
            onChange={handleOnChange}
            min={1}
            type="number"
            value={input.expectedReturn}
            required
          />
        </div>

        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            onChange={handleOnChange}
            min={1}
            type="number"
            value={input.annualInvestment}
            required
          />

          <label htmlFor="duration">Duration</label>
          <input
            name="duration"
            onChange={handleOnChange}
            min={1}
            type="number"
            value={input.duration}
            required
          />
        </div>
      </div>
    </div>
  );
}
