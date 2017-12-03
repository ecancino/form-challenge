import { tryCatch, always, zipObj, propSatisfies } from 'ramda'
import { isEmail, isEmpty, isAlpha, isMobilePhone, isBefore, equals, blacklist } from 'validator'

const stringify = o => JSON.stringify(o, null, 2)
export const toJSON = tryCatch(stringify, always({}))

export const toUser = zipObj([
  'firstname', 'lastname', 'email', 'phone', 'region', 'birthday', 'gender', 'active', 'photo'
])

export const over21 = propSatisfies(age => age > 21, 'age')

export const genderValue = gender => ([female, male]) =>
  female.checked ? female.value : male.checked ? male.value : gender

export const nameValidator = name => !isEmpty(name) && isAlpha(name)
export const emailValidator = email => !isEmpty(email) && isEmail(email)
export const phoneValidator = phone => !isEmpty(phone) && isMobilePhone(blacklist(phone, [' ', '(', ')']), 'en-US')
export const birthdayValidator = birthday => isBefore(birthday, '1/1/2001')
export const regionValidator = region => !equals(region, 'Unknown')
