import API from '../middleware/api'

export const FETCH_USERS = 'FETCH_USERS'

const api = new API()
const users = api.service('users')

export default () => {
  return (dispatch) => {
    console.log('Fetching users...')
    users.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchUsers(result))
      })
  }
}

const fetchUsers = (result) => {
  console.log('dispatching fetchUsers')
  return {
    type: FETCH_USERS,
    payload: [].concat(result.data)
  }
}
