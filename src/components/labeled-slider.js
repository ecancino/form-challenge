import xs from 'xstream'
import { div, span, input, br } from '@cycle/dom'
import isolate from '@cycle/isolate'

const LabeledSlider = (sources) => {
  const domSource = sources.DOM;
  const props$ = sources.props;

  const newValue$ = domSource
    .select('.slider')
    .events('input')
    .map(ev => ev.target.value);

  const getProps = ({ label, unit, min, max }, value) => ({ label, unit, min, max, value })

  const getChange = props => newValue$
    .map(value => getProps(props, value))
    .startWith(props)

  const state$ = props$
    .map(getChange)
    .flatten()
    .remember();

  const vdom$ = state$
    .map(state =>
      div('.labeled-slider', [
        span('.label',
          state.label + ' ' + state.value + state.unit
        ),
        br(),
        input('.slider', {
          attrs: {type: 'range', min: state.min, max: state.max, value: state.value}
        })
      ])
    );

  const sinks = {
    DOM: vdom$,
    value: state$.map(state => state.value),
  };
  return sinks;
}

export const createProps = (label, unit, min, value, max) => xs.of({
  label, unit, min, value, max
})

export const createSlider = (DOM, label, unit, min, value, max) => isolate(LabeledSlider)({ DOM, props: createProps(label, unit, min, value, max) })
