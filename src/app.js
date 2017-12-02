import xs from 'xstream'
import { h3, pre } from '@cycle/dom'
import { toJSON } from './helpers/data'
import { formRow, formColumn } from './helpers/dom'
import Form from './components/Form'

export const main = ({ DOM, HTTP }) => {
  const form = Form(DOM, HTTP)

  const vdom$ = xs.combine(form.DOM, form.DATA).map(([Form, { user }]) => {
    return formColumn([
      h3(Date.now()),
      Form,
      formRow([
        formColumn([
          pre(toJSON(user))
        ], 100)
      ])
    ], 100)
  })

  return {
    DOM: vdom$,
    HTTP: form.HTTP
  }
}
