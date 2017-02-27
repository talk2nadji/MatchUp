import { CREATE_MATCH } from '../actions/create-match'
import { FETCH_MATCHES } from '../actions/fetch-matches'
import { MATCH_CREATED } from '../actions/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_MATCHES:
      return [].concat(payload)

    case CREATE_MATCH:
      return [Object.assign({}, payload)].concat(state)

    case MATCH_CREATED:
      const newMatch = Object.assign({}, payload)
      return [newMatch].concat(state)

    default:
      return state
  }
}
