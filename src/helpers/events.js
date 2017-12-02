import { prop } from 'ramda'

export const listenField = (DOM, sel, evt, start, preventDefault = false) =>
  DOM.select(sel).events(evt, { preventDefault }).map(prop('target')).startWith(start)
