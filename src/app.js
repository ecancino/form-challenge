import xs from 'xstream'
import { section, h3, pre } from '@cycle/dom'
import { formRow, formColumn } from './helpers/dom'

import Form from './components/Form'

export const main = ({ DOM, HTTP }) => {
  const form = Form(DOM, HTTP)

  const vdom$ = xs.combine(form.DOM, form.DATA).map(([Form, { user }]) => {
    return section('.column.column-100', [
      h3(Date.now()),
      Form,
      formRow([
        formColumn([
          pre(JSON.stringify(user, null, 2))
        ], 100)
      ])
    ])
  })

  return {
    DOM: vdom$,
    HTTP: form.HTTP
  }
}
