import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { main } from './app'

const drivers = {
  DOM: makeDOMDriver('#root')
}

run(main, drivers)
