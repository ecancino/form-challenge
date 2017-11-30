import xs from 'xstream'
import { div, span, h2, input } from '@cycle/dom'
import { bmiCalculator } from './components/bmi-calculator'

export function main(sources) {

  const vdom$ = bmiCalculator(sources).DOM
    .map((calculator) =>
      div([
        h2('BMI Calculator'),
        calculator
      ])
    );

  return {
    DOM: vdom$
  };
}
