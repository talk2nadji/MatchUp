import API from '../middleware/api'

export const SUBSCRIBED_TO_MATCHES_SERVICE = 'SUBSCRIBED_TO_MATCHES_SERVICE'
export const MATCH_CREATED = 'MATCH_CREATED'


const api = new API()
const matches = api.service('matches')

export default () => {
  return (dispatch) => {
    matches.on('created', (match) => { dispatch(createdMatch(match)) })

    dispatch({ type: SUBSCRIBED_TO_MATCHES_SERVICE })
  }
}

const createdMatch = (match) => {
  return {
    type: MATCH_CREATED,
    payload: match
  }
}
