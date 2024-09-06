import React, { useContext } from 'react'
import { CalculatorContext } from '../providers/CalculatorProvider'
import '../css/Buttons.css'

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
