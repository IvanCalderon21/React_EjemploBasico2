import React, { useContext } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';
import '../css/Buttons.css'

export default function OpTotalComponent() {
  const { calculateTotal } = useContext(CalculatorContext);

  const handleTotal = () => {
    calculateTotal();  // Realiza el cálculo
    // console.log('El total es: ', currentSum);  // Imprime el resultado actual
  };

  return (
    <button onClick={handleTotal}>=</button>
  );
}
