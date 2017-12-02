import { path } from 'ramda'

const targetValue = path(['target', 'value'])

export const listenField = (DOM, sel, evt, start = '') =>
  DOM.select(sel).events(evt).map(targetValue).startWith(start)
