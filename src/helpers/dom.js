import { section, label, input, select, option, img, span } from '@cycle/dom'
import { map, concat, contains } from 'ramda'

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

export const columnField = ({ id, name, value, label, type = 'text', checked }) =>
  formColumn([
    createLabel(name, label),
    createInput({ id: (id ? id : name), name, value, type, checked })
  ])

export const columnSelect = ({ name, value, label, options }) =>
  formColumn([
    createLabel(name, label),
    createSelect(name, options, value, { name: 'Unknown' })
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
