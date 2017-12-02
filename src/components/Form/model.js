import { merge, path, prop, propSatisfies } from 'ramda'

const over21 = propSatisfies(age => age > 21, 'age')

const normalizeUser = user => ({
  photo: prop('photo', user),
  firstname: prop('name', user),
  lastname: prop('surname', user),
  email: prop('email', user),
  phone: prop('phone', user),
  birthday: path(['birthday', 'mdy'], user),
  gender: prop('gender', user),
  region: prop('region', user),
  active: over21(user)
})

const model = ({ formChange$ }) => formChange$.map(
  ([ user, regions, inputs ]) => ({ regions, user: merge(inputs, normalizeUser(user)) })
)

export default model
