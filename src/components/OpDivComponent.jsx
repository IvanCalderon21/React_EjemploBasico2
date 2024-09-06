import React, { useContext } from 'react'
import { CalculatorContext } from '../providers/CalculatorProvider'
import '../css/Buttons.css'

export default function OpDivComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleDiv = () => {
    handleOperation('div');
    console.log(("La operación es una división"));
  };

  return (
    <button onClick={handleDiv}>&divide;</button>
  );
}