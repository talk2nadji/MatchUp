import { FETCH_USERS } from '../actions/fetch-users'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_USERS:
      return [].concat(payload)

    default:
      return state
  }
}
