import { useState, useEffect } from 'react';

const PriceDisplay = ({ price }) => {
  const [displayPrice, setDisplayPrice] = useState(price);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    // Trigger fade out
    setFadeClass('fade-out');
    
    // Wait for the fade-out to complete before updating the price
    const timeout = setTimeout(() => {
      setDisplayPrice(price);
      setFadeClass('fade-in');
    }, 200); // Match this duration with your CSS transition time for fade-out

    // Reset the fade-in class after the animation completes
    const resetTimeout = setTimeout(() => {
      setFadeClass('');
    }, 400); // Total duration of fade-out and fade-in

    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };
  }, [price]);

  // Extract the numeric part of the price
  const numericPrice = displayPrice.replace('$', '');

  return (
    <div className="text-center mb-8 flex justify-center items-end price-container">
      <span className="dollar-sign">$</span>
      <h2 className={`text-4xl font-bold text-black ${fadeClass}`}>{numericPrice}</h2>
    </div>
  );
};

export default PriceDisplay;
