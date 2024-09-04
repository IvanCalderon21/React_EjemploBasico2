import React, { useContext } from 'react'
import '../css/Buttons.css'
import { CalculatorContext } from '../providers/CalculatorProvider'

export default function OpMulComponent() {
  const { handleOperation } = useContext(CalculatorContext);
  
  const handleMul = () => {
    handleOperation('mul');
    console.log("La operación es una multiplicación");
  };

  return (
    <button onClick={handleMul}>&times;</button>
  );
}
