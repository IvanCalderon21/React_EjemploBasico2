import React, { useContext } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';
import '../css/Buttons.css';

export default function OpACComponent() {
    const { clearDisplay } = useContext(CalculatorContext);
  
    const clearData = () => {
      clearDisplay();
    };
  
    return (
      <button onClick={clearData}>AC</button>
    );
  }
  