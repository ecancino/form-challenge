import xs from 'xstream'

import { formColumn, columnCode } from './helpers/dom'
import Form from './components/Form'

export const main = ({ DOM, HTTP }) => {
  const form = Form(DOM, HTTP)

  const vdom$ = xs.combine(form.DOM, form.DATA).map(([Form, { user }]) => {
    return formColumn([
      Form,
      columnCode(user)
    ], 100)
  })

  return {
    DOM: vdom$,
    HTTP: form.HTTP
  }
}
