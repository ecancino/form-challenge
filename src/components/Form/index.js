
import model from './model'
import intent from './intent'
import view from './view'

export default (DOM, HTTP) => {
  const actions = intent(DOM, HTTP)
  const state$ = model(actions)
  const vtree$ = view(state$)

  return {
    DOM: vtree$,
    DATA: state$,
    HTTP: actions.requests$
  }
}
