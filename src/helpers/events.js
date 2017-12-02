import { path } from 'ramda'

const targetValue = path(['target', 'value'])

export const listenField = (DOM, sel, evt, start, preventDefault = false) =>
  DOM.select(sel).events(evt, { preventDefault }).map(targetValue).startWith(start)
