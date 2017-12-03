import { section } from '@cycle/dom'
import { formRow, createImage, columnField, columnSelect, columnRadio, columnSubmit } from '../../helpers/dom'
import { nameValidator, emailValidator, phoneValidator, regionValidator, birthdayValidator } from '../../helpers/data'

const Form = ({ user, regions }) =>
  section('.column.column-100', [
    createImage(user.photo, '.avatar'),
    formRow([
      columnField({ name: 'firstname', label: 'Firstname', value: user.firstname, validator: nameValidator }),
      columnField({ name: 'lastname', label: 'Lastname', value: user.lastname, validator: nameValidator })
    ]),
    formRow([
      columnField({ name: 'email', label: 'Email', value: user.email, validator: emailValidator }),
      columnField({ name: 'phone', label: 'Phone', value: user.phone, validator: phoneValidator })
    ]),
    formRow([
      columnSelect({ name: 'region', label: 'Region', options: regions, value: user.region, validator: regionValidator }),
      columnField({ name: 'birthday', label: 'Birthday', value: user.birthday, validator: birthdayValidator })
    ]),
    formRow([
      columnRadio({ name: 'gender', label: 'Gender', options: [
        { id: 'female', name: 'gender', label: 'Female', value: 'female', checked: user.gender === 'female'  },
        { id: 'male', name: 'gender', label: 'Male', value: 'male', checked: user.gender === 'male' }
      ]}),
      columnField({ name: 'active', label: 'Active', checked: user.active, type: 'checkbox' })
    ]),
    formRow([
      columnSubmit({ id: 'send', name: 'Send', value: 'Send' })
    ])
  ])

const view = state$ => state$.map(Form)

export default view
