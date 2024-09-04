import React, { useContext } from 'react'
import '../css/Buttons.css'
import { CalculatorContext } from '../providers/CalculatorProvider'

export default function OpSubComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleSub = () => {
    handleOperation('sub');
    console.log("La operación es una resta");
  };

  return (
    <button onClick={handleSub}>-</button>
  )
}
