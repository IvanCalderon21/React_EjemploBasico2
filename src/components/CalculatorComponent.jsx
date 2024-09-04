import React from 'react'
import '../css/Calculator.css'
import Number0Component from './Number0Component'
import Number1Component from './Number1Component'
import Number2Component from './Number2Component'
import Number3Component from './Number3Component'
import Number4Component from './Number4Component'
import Number5Component from './Number5Component'
import Number6Component from './Number6Component'
import Number7Component from './Number7Component'
import Number8Component from './Number8Component'
import Number9Component from './Number9Component'
import OpAddComponent from './OpAddComponent'
import OpSubComponent from './OpSubComponent'
import OpMulComponent from './OpMulComponent'
import OpDivComponent from './OpDivComponent'
import OpSqrComponent from './OpSqrComponent'
import OpTotalComponent from './OpTotalComponent'
import { CalculatorProvider } from '../providers/CalculatorProvider'

export default function CalculatorComponent() {
  return (
    <CalculatorProvider>
      <div className='Calculator'>
        <Number0Component />
        <Number1Component />
        <Number2Component />
        <Number3Component />
        <Number4Component />
        <Number5Component />
        <Number6Component />
        <Number7Component />
        <Number8Component />
        <Number9Component />
        
        <OpAddComponent />
        <OpSubComponent />
        <OpMulComponent />
        <OpDivComponent />
        <OpSqrComponent />
        <OpTotalComponent />
      </div>
    </CalculatorProvider>
  )
}
