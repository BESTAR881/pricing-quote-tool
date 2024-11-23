import { useState, useEffect } from 'react';
import AnimatedDigit from './AnimatedDigit';
import styles from '../styles/PriceDisplay.module.css'; // Import CSS Module

const PriceDisplay = ({ price }) => {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    setDigits(price.split('').filter(char => !isNaN(char))); // Extract digits
  }, [price]);

  return (
    <div className={`text-center mb-8 flex justify-center items-end ${styles.priceContainer}`}>
      <span className={styles.dollarSign}>$</span>
      <h2 className="text-4xl font-bold text-black flex">
        {digits.map((digit, index) => (
          <AnimatedDigit key={index} digit={digit} />
        ))}
      </h2>
    </div>
  );
};

export default PriceDisplay;
