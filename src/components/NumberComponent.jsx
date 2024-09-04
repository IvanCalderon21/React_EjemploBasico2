import React, { useContext } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';

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
