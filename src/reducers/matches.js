import { CREATE_MATCH } from '../actions/create-match'
import { FETCH_MATCHES } from '../actions/fetch-matches'

const matches = [
  {
    date: 'Thu Feb 23 2017',
    user1: 'Richard Nadji',
    user2: 'Sarike Wijsman',
  },
  {
    date: 'Thu Feb 22 2017',
    user1: 'Richard Nadji',
    user2: 'Sarike Wijsman',
  },
  {
    date: 'Thu Feb 21 2017',
    user1: 'Richard Nadji',
    user2: 'Sarike Wijsman',
  },
]

export default (state = matches, { type, payload } = {}) => {
  switch(type) {
    case FETCH_MATCHES:
      return [].concat(payload)
    case CREATE_MATCH:
      return [Object.assign({}, payload)].concat(state)
    default:
      return state
  }
}
