import { section } from '@cycle/dom'
import { formRow, createImage, columnSubmit } from '../../helpers/dom'

import firstnameField from './fields/firstname'
import lastnameField from './fields/lastname'
import emailField from './fields/email'
import phoneField from './fields/phone'
import birthdayField from './fields/birthday'
import regionField from './fields/region'
import genderField from './fields/gender'
import activeField from './fields/active'

const Form = ({ user, regions }) =>
  section('.column.column-100', [
    createImage(user.photo, '.avatar'),
    formRow([ firstnameField(user.firstname), lastnameField(user.lastname) ]),
    formRow([ emailField(user.email), phoneField(user.phone) ]),
    formRow([ regionField(user.region, regions), birthdayField(user.birthday) ]),
    formRow([ genderField(user.gender), activeField(user.active) ]),
    formRow([ columnSubmit({ id: 'send', name: 'Send', value: 'Send' }) ])
  ])

const view = state$ => state$.map(Form)

export default view
