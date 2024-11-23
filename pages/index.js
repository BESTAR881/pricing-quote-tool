import { useState } from 'react';
import PriceDisplay from '../components/PriceDisplay';
import OptionsForm from '../components/OptionsForm';

export default function Home() {
  const [price, setPrice] = useState(0);

  const formatPrice = (amount) => {
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-1100px m-5">
        <PriceDisplay price={formatPrice(price)} />
        <OptionsForm setPrice={setPrice} />
      </div>
    </div>
  );
}
