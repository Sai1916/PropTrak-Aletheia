import React, { useState } from 'react';
import '../styles/PriceInput.css';

interface PriceInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const PriceInput = ({ value, onChange }: PriceInputProps) => {

  const [inputValue, setInputValue] = useState(value ? value.toFixed(2) :  '');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;

    const regex = /^\d*\.?\d{0,2}$/;

    if (input === "" || input === "0.00" || regex.test(input)) {
      setInputValue(input);
      onChange(input === "" ? 0 : parseFloat(input));
    }
  };

  const handleBlur = () => {
    // Optional: format value to 2 decimals on blur if valid
    if (inputValue !== "" && !isNaN(Number(inputValue))) {
      setInputValue(parseFloat(inputValue).toFixed(2));
      onChange(parseFloat(inputValue));
    }
  };

  return (
    <div className="price_input">
      <div className="price_input_container">
        <span className="dollar_sign">$</span>
        <span className='border_line' />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default PriceInput;