import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../UI/Button";

const Form = (props) => {
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
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate({
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": expectedInterest,
      "duration": investmentDuration
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
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
        <Button type="reset" btnStyle="buttonAlt">
          Reset
        </Button>
        <Button type="submit" btnStyle="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default Form;
