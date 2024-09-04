import React, { useContext } from 'react'
import '../css/Buttons.css'
import { CalculatorContext } from '../providers/CalculatorProvider'

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