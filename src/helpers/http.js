import xs from 'xstream'
import { prop } from 'ramda'

export const fetch = (http, action, initial) =>
  http.select(action).flatten()
    .map(prop('body')).startWith(initial)

export const createRequest = (url, category, method = 'GET') =>
  xs.of({ url, category, method })
