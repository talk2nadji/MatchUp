import API from '../middleware/api'
import loadError from './error'
import loadSuccess from './success'
import loading from './loading'

export const CREATE_MATCH = 'CREATE_MATCH'

const api = new API()
const matches = api.service('matches')

export default (match) => {
  return (dispatch) => {
    dispatch(loading(true))
    console.log('STEP 1')
    // api.authenticate()
    matches.create(match)
    .then((response) => {
      console.log('STEP 3: ', response)
      dispatch(loadSuccess())
      dispatch({ type: CREATE_MATCH })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
