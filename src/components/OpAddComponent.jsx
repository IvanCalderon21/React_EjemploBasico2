import React, { useContext } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';
import '../css/Buttons.css';

export default function OpAddComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleAdd = () => {
    handleOperation('add'); // Establece que la operación es una suma
    console.log("La operación es una suma");
  };

  return (
    <button onClick={handleAdd}>+</button>
  );
}
