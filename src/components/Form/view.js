import { section } from '@cycle/dom'
import { formRow, formColumn, createInput, createLabel, createSelect, createImage } from '../../helpers/dom'

const Form = ({ user, regions }) =>
  section('.column.column-100', [
    createImage(user.photo, '.avatar'),
    formRow([
      formColumn([
        createLabel('firstname', 'Firstname'),
        createInput({ id: 'firstname', name: 'firstname', value: user.firstname, type: 'text' })
      ]),
      formColumn([
        createLabel('lastname', 'Lastname'),
        createInput({ id: 'lastname', name: 'lastname', value: user.lastname, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('email', 'Email'),
        createInput({ id: 'email', name: 'email', value: user.email, type: 'text' })
      ]),
      formColumn([
        createLabel('phone', 'Phone'),
        createInput({ id: 'phone', name: 'phone', value: user.phone, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('region', 'Region'),
        createSelect('region', regions, user.region, { name: 'Unknown' })
      ]),
      formColumn([
        createLabel('birthday', 'Birthday'),
        createInput({ id: 'birthday', name: 'birthday', value: user.birthday, type: 'text' })
      ])
    ]),
    formRow([
      formColumn([
        createLabel('gender', 'Gender'),
        section('.column.column-100', [
          createInput({ id: 'female', name: 'gender', value: 'Female', type: 'radio', checked: user.gender === 'female' }),
          createLabel('female', 'Female', '.label-inline'),
          createInput({ id: 'male', name: 'gender', value: 'Male', type: 'radio', checked: user.gender === 'male' }),
          createLabel('male', 'Male', '.label-inline')
        ])
      ]),
      formColumn([
        createLabel('active', 'Active'),
        createInput({ id: 'active', name: 'active', checked: user.active, type: 'checkbox' })
      ])
    ]),
    formRow([
      formColumn([
        createInput({ id: 'send', name: 'Send', value: 'Send', type: 'submit' }, '.float-right')
      ], 100)
    ])
  ])

const view = state$ => state$.map(Form)

export default view
