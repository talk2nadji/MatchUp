const users = [
  {
    _id: 'abc123',
    name: 'Richard Nadji',
    email: 'talk2nadji@hotmail.com',
    image: 'richie.url'
  },
  {
    _id: 'abc124',
    name: 'Doutzen Kroes',
    email: 'doutzen@hotmail.com',
    image: 'doutzen.url'
  },
]

export default (state = users, { type, payload } = {}) => {
  return state
}
