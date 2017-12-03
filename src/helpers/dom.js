import { section, label, input, select, option, img, span, pre } from '@cycle/dom'
import { map, concat, contains, always } from 'ramda'
import { toJSON } from './data'

export const createOption = value => ({ name }) =>
  option({ attrs: { value: name, selected: contains(value, name) } }, [ name ])

export const createSelect = (name, options, value, empty) =>
  select(`#${name}`, {}, map(createOption(value), concat([empty], options)))

export const createLabel = (forId, name, sel = '') =>
  label(sel, { attrs: { for: forId } }, name)

export const createInput = (attrs, sel = '') =>
  input(`#${attrs.id}${sel}`, { attrs })

export const formColumn = (children, width = 50) =>
  section(`.column.column-${width}`, children)

export const formRow = children =>
  section('.row', children)

export const createImage = (src, classes = '') =>
  img(`${classes}`, { attrs: { src } })

export const createError = field =>
  span('.error', `${field} is invalid, please review.`)

export const columnField = ({ id, name, value = '', label, type = 'text', checked, validator = always(true)  }) =>
  formColumn([
    createLabel(name, label),
    createInput({ id: (id ? id : name), name, value, type, checked }),
    !validator(value) ? createError(label) : null
  ])

export const columnSelect = ({ name, value = '', label, options, validator = always(true) }) =>
  formColumn([
    createLabel(name, label),
    createSelect(name, options, value, { name: 'Unknown' }),
    !validator(value) ? createError(label) : null
  ])

export const radioButton = ({ id, name, value, label, checked }) =>
  span([
    createInput({ id, name, value, type: 'radio', checked }),
    createLabel(id, label, '.label-inline')
  ])

export const columnRadio = ({ name, label, options }) =>
  section('.column.column-100', [
    createLabel(name, label),
    section('.column.column-100', map(radioButton, options))
  ])

export const columnSubmit = ({ id, name, value }) =>
  formColumn([
    createInput({ id, name, value, type: 'submit' }, '.float-right')
  ], 100)

export const columnCode = object =>
  formColumn([
    pre(toJSON(object))
  ], 100)
