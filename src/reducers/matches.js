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
    case 'FETCH_MATCHES':
      return [].concat(payload)
    default:
      return state
  }
}
