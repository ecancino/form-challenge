import xs from 'xstream'

import { listenField } from '../../helpers/events'
import { fetch, createRequest } from '../../helpers/http'

const intent = (DOM, HTTP) => {
  const user$ = fetch(HTTP, 'user', { birthday: {} })
  const regions$ = fetch(HTTP, 'regions', [])
  const firstname$ = listenField(DOM, '#firstname', 'input')
  const lastname$ = listenField(DOM, '#lastname', 'input')
  const email$ = listenField(DOM, '#email', 'input')
  const phone$ = listenField(DOM, '#phone', 'input')
  const region$ = listenField(DOM, '#region', 'input')
  const birthday$ = listenField(DOM, '#birthday', 'input')
  const gender$ = listenField(DOM, '#gender', 'click')
  const active$ = listenField(DOM, '#active', 'click')
  // const send$ = listenField(DOM, '#send', 'click', true)

  const inputs$ = xs.combine(
    firstname$, lastname$, email$, phone$, region$, birthday$, gender$, active$
  ).map(
    ([ firstname, lastname, email, phone, region, birthday, gender, active ]) =>
      ({ firstname, lastname, email, phone, region, birthday, gender, active })
  )

  const getUser$ = createRequest('https://uinames.com/api/?ext', 'user')
  const getRegions$ = createRequest('https://restcountries.eu/rest/v2/all', 'regions')

  const formChange$ = xs.combine(user$, regions$, inputs$)
  const requests$ = xs.merge(getUser$, getRegions$).take(2)

  return { formChange$, requests$ }
}

export default intent
