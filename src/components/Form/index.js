
import model from './model'
import intent from './intent'
import view from './view'

export default (DOM, HTTP) => {
  const { formChange$, requests$ } = intent(DOM, HTTP)
  const state$ = model(formChange$)
  const vtree$ = view(state$)

  return {
    DOM: vtree$,
    DATA: state$,
    HTTP: requests$
  }
}
