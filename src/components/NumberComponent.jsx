import React, { useContext } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';
import '../css/Buttons.css';

export default function NumberComponent({ number }) {
    const { selectNumber } = useContext(CalculatorContext);
    
    return (
        <div>
            <button onClick={() => selectNumber(number)}>
                {number}
            </button>
        </div>
    );
}
