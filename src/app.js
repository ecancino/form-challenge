import xs from 'xstream'
import { section } from '@cycle/dom'
import { formRow, formColumn, createInput, createLabel, createSelect, createImage } from './helpers/dom'
import { fetch, createRequest } from './helpers/http'
import { listenField } from './helpers/events'


const intent = (DOM, HTTP) => {
  const user$ = fetch(HTTP, 'user', { birthday: {} })
  const regions$ = fetch(HTTP, 'regions', [])
  const firstname$ = listenField(DOM, '#Firstname', 'input')

  const getUser$ = createRequest('https://uinames.com/api/?ext', 'user')
  const getRegions$ = createRequest('https://restcountries.eu/rest/v2/all', 'regions')

  return {
    formChange$: xs.combine(user$, regions$, firstname$),
    requests$: xs.merge(getUser$, getRegions$)
  }
}

const model = actions => actions.formChange$

const view = state$ => state$.map(([user, regions]) =>
  section('.column.column-100', [
    createImage(user.photo, '.avatar'),
    formRow([
      formColumn([
        createLabel('Firstname'),
        createInput({ name: 'Firstname', value: user.name, type: 'text' })
      ]),
      formColumn([
        createLabel('Lastname'),
        createInput({ name: 'Lastname', value: user.surname, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('Email'),
        createInput({ name: 'Email', value: user.email, type: 'text' })
      ]),
      formColumn([
        createLabel('Phone'),
        createInput({ name: 'Phone', value: user.phone, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('Region'),
        createSelect('Region', regions, user.region, { name: 'Unknown' })
      ]),
      formColumn([
        createLabel('Birthday'),
        createInput({ name: 'Birthday', value: user.birthday.mdy, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('Gender'),
        section('.column.column-50', [
          createInput({ name: 'Gender', value: 'Female', type: 'radio', checked: user.gender === 'female' }),
          'Female'
        ]),
        section('.column.column-50', [
          createInput({ name: 'Gender', value: 'Male', type: 'radio', checked: user.gender === 'male' }),
          'Male'
        ])
      ]),
      formColumn([
        createLabel('Active'),
        createInput({ name: 'Active', value: user.age > 25, type: 'checkbox' })
      ])
    ]),
    formRow([
      formColumn([
        createInput({ name: 'Send', value: 'Send', type: 'button' }, '.float-right')
      ], 100)
    ])
  ])
)

export const main = ({ DOM, HTTP }) => {
  const actions = intent(DOM, HTTP)
  const state$ = model(actions)
  const vtree$ = view(state$)
  return {
    DOM: vtree$,
    HTTP: actions.requests$
  }
}
