import React, { useContext, useEffect } from 'react';
import { CalculatorContext } from '../providers/CalculatorProvider';
import '../css/Display.css';

export default function DisplayComponent() {
    const { displayText } = useContext(CalculatorContext);

    return (
        <p className='Display'>{displayText}</p>
    );
}
