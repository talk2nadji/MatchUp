import API from '../middleware/api'

export const FETCH_MATCHES = 'FETCH_MATCHES'

const api = new API()
const matches = api.service('matches')

export default () => {
  return (dispatch) => {
    console.log('Fetching matches...')
    //TODO authenticate currentUser
    matches.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchMatches(result))
      })
  }
}

const fetchMatches = (result) => {
  console.log('dispatching fetchMatches')
  return {
    type: FETCH_MATCHES,
    payload: [].concat(result.data)
  }
}
