import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const calculateHandler = (userInput) => {
    console.log(userInput);
    const yearlyData = [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterest = 0;
    let investedCapital = currentSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      investedCapital += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: investedCapital
      });
    }

    setData([...yearlyData]);
  };

  return (
    <div>
      <Title />
      <Form onCalculate={calculateHandler} />
      <Table data={data} />
    </div>
  );
}

export default App;
