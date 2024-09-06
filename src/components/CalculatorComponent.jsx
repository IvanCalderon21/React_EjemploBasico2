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
import NumberDotComponent from './NumberDotComponent'
import OpAddComponent from './OpAddComponent'
import OpSubComponent from './OpSubComponent'
import OpMulComponent from './OpMulComponent'
import OpDivComponent from './OpDivComponent'
import OpSqrComponent from './OpSqrComponent'
import OpTotalComponent from './OpTotalComponent'
import DisplayComponent from './DisplayComponent'
import { CalculatorProvider } from '../providers/CalculatorProvider'
import OpACComponent from './OpACComponent'

export default function CalculatorComponent() {
  return (
    <CalculatorProvider>
      <div className='Calculator'>
        <DisplayComponent className="grid-item" />

        <Number1Component className="grid-item" />
        <Number2Component className="grid-item" />
        <Number3Component className="grid-item" />
        <Number4Component className="grid-item" />
        <Number5Component className="grid-item" />
        <Number6Component className="grid-item" />
        <Number7Component className="grid-item" />
        <Number8Component className="grid-item" />
        <Number9Component className="grid-item" />
        <Number0Component className="grid-item" />
        <NumberDotComponent className="grid-item" />
        
        <OpAddComponent className="grid-item" />
        <OpSubComponent className="grid-item" />
        <OpMulComponent className="grid-item" />
        <OpDivComponent className="grid-item" />
        <OpSqrComponent className="grid-item" />
        <OpTotalComponent className="grid-item" />
        <OpACComponent className="grid-item" />
      </div>
    </CalculatorProvider>
  )
}
