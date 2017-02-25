import API from '../middleware/api'
import { history } from '../store'
import loadError from './error'
import loadSuccess from './success'
import loading from './loading'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate(user)
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: USER_SIGNED_IN,
        payload: response.data
      })
      history.push('/')
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
