import React from "react";
import styles from "./Title.module.css";
import logo from '../../assets/investment-calculator-logo.png';

const Title = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Title;
