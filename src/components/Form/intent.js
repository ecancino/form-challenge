import xs from 'xstream'
import { prop } from 'ramda'
import { toUser, over21, genderValue }  from '../../helpers/data'
import { listenField } from '../../helpers/events'
import { fetch, createRequest } from '../../helpers/http'

const intent = (DOM, HTTP) => {
  const user$ = fetch(HTTP, 'user', { birthday: {} })
  const regions$ = fetch(HTTP, 'regions', [])

  const getRegions$ = createRequest('https://restcountries.eu/rest/v2/all', 'regions')
  const getUser$ = listenField(DOM, '#send', 'click').map(() => createRequest('https://uinames.com/api/?ext&', 'user')).flatten()

  const form$ = user$.map(user => {
    const firstname$ = listenField(DOM, '#firstname', 'input', { value: user.name }).map(prop('value'))
    const lastname$ = listenField(DOM, '#lastname', 'input', { value: user.surname }).map(prop('value'))
    const email$ = listenField(DOM, '#email', 'input', { value: user.email }).map(prop('value'))
    const phone$ = listenField(DOM, '#phone', 'input', { value: user.phone }).map(prop('value'))
    const region$ = listenField(DOM, '#region', 'input', { value: user.region }).map(prop('value'))
    const birthday$ = listenField(DOM, '#birthday', 'input', { value: user.birthday.mdy }).map(prop('value'))
    const female$ = listenField(DOM, '#female', 'change', {})
    const male$ = listenField(DOM, '#male', 'change', {})
    const gender$ = xs.combine(female$, male$).startWith([false, false]).map(genderValue(user.gender))
    const active$ = listenField(DOM, '#active', 'click', { checked: over21(user) }).map(prop('checked'))
    const photo$ = xs.of(user.photo)

    return xs.combine(firstname$, lastname$, email$, phone$, region$, birthday$, gender$, active$, photo$).map(toUser)
  }).flatten()

  const formChange$ = xs.combine(form$, regions$)
  const requests$ = xs.merge(getUser$, getRegions$)

  return { formChange$, requests$ }
}

export default intent
