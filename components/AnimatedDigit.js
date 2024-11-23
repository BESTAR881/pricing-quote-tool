import { useState, useEffect } from 'react';
import styles from '../styles/AnimatedDigit.module.css'; // Import CSS Module

const AnimatedDigit = ({ digit }) => {
  const [displayDigit, setDisplayDigit] = useState(digit);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDisplayDigit(Math.floor(Math.random() * 10)); // Show random digits while animating
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(animationInterval);
      setDisplayDigit(digit); // Set the final digit
    }, 500);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(timeout);
    };
  }, [digit]);

  return <span className={styles.animatedDigit}>{displayDigit}</span>;
};

export default AnimatedDigit;
