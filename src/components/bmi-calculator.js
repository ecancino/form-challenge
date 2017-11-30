import xs from 'xstream'
import { div, span, h2, input } from '@cycle/dom'
import isolate from '@cycle/isolate'
import { createSlider } from './labeled-slider'

export function bmiCalculator(sources) {
  const { DOM } = sources;

  const weightSlider = createSlider(DOM, 'Weight', 'kg', 40, 70, 150);
  const heightSlider = createSlider(DOM, 'Height', 'cm', 140, 170, 210);

  const bmi$ = xs.combine(weightSlider.value, heightSlider.value)
    .map(([weight, height]) => {
      const heightMeters = height * 0.01;
      return Math.round(weight / (heightMeters * heightMeters));
    })
    .remember();

  const vdom$ = xs.combine(bmi$, weightSlider.DOM, heightSlider.DOM)
    .map(([bmi, weightVDom, heightVDom]) =>
      div([
        weightVDom,
        heightVDom,
        h2('BMI is ' + bmi)
      ])
    );

  return {
    DOM: vdom$
  };
}
