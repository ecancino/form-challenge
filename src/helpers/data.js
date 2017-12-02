import { tryCatch, always, zipObj, propSatisfies } from 'ramda'

const stringify = o => JSON.stringify(o, null, 2)
export const toJSON = tryCatch(stringify, always({}))

export const toUser = zipObj([
  'firstname', 'lastname', 'email', 'phone', 'region', 'birthday', 'gender', 'active', 'photo'
])

export const over21 = propSatisfies(age => age > 21, 'age')

export const genderValue = gender => ([female, male]) =>
  female.checked ? female.value : male.checked ? male.value : gender
