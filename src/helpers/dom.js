import { section, label, input, select, option, img } from '@cycle/dom'
import { map, concat, contains } from 'ramda'

export const createOption = value => ({ name }) =>
  option('', { attrs: { value: name, selected: contains(value, name), defaultChecked: value } }, [ name ])

export const createSelect = (name, options, value, empty, sel = '') =>
  select(`#${name}${sel}`, {}, map(createOption(value), concat([empty], options)))

export const createLabel = (forId, name, sel = '') =>
  label(sel, { attrs: { for: forId } }, name)

export const createInput = (attrs, classes = '') =>
  input(`#${attrs.name}${classes}`, { attrs })

export const formColumn = (children, width = 50) =>
  section(`.column.column-${width}`, children)

export const formRow = children =>
  section('.row', children)

export const createImage = (src, classes = '') =>
  img(`${classes}`, { attrs: { src } })
