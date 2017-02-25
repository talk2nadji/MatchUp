import { LOAD_ERROR } from '../actions/error'
import { LOAD_SUCCESS } from '../actions/success'

export default (state = null, { type, payload }) => {
  switch(type) {
    case LOAD_ERROR :
      return payload.message

    case LOAD_SUCCESS :
      return null

    default :
      return state
  }
}
