import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { makeHTTPDriver } from '@cycle/http';
import { main } from './app'
import './scss/app.scss'

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver()
}

run(main, drivers)
