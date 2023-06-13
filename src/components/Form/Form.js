import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../UI/Button";

const Form = () => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedInterest, setExpectedInterest] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const currentSavingChangeHandler = (event) => {
    setCurrentSavings(+event.target.value);
  };

  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(+event.target.value);
  };

  const expectedInterestChangeHandler = (event) => {
    setExpectedInterest(+event.target.value);
  };

  const investmentDurationChangeHandler = (event) => {
    setInvestmentDuration(+event.target.value);
  }

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingChangeHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsChangeHandler}
            value={yearlySavings}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestChangeHandler}
            value={expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationChangeHandler}
            value={investmentDuration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <Button type="reset" style="buttonAlt">
          Reset
        </Button>
        <Button type="submit" style="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default Form;
