import React, { useContext } from 'react'
import '../css/Buttons.css'
import { CalculatorContext } from '../providers/CalculatorProvider'

export default function OpSqrComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleSqr = () => {
    handleOperation('sqr');
    console.log("La operación es una raíz");
  };

  return (
    <button onClick={handleSqr}>&radic;</button>
  )
}
