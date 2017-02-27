import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchUsers from '../actions/fetch-users'
import createMatch from '../actions/create-match'
import subscribeToMatchesService from '../actions/subscribe'
import ListItem from './ListItem'
import './MatchGenerator.sass'

class MatchGenerator extends PureComponent {
  static propTypes = {
    //TODO validations
  }

  constructor() {
    super()
    this.state = {
      date: new Date(),
      user1: '',
      user2: '',
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.subscribeToMatchesService()
  }

  setUser1(user) {
    console.log('SET_STATE: ', user)
    this.setState({ user1: user.name })
  }

  setUser2(user) {
    console.log('SET_STATE: ', user)
    this.setState({ user2: user.name })
  }

  //TODO pick random partner > bonus if not same
  findPartner() {
    const { users } = this.props
    let randomName = users[Math.floor(Math.random() * users.length)]
    console.log('(TODO) Your random partner would be: ', randomName)
  }

  generateMatch() {
    const { date, user1, user2 } = this.state
    const todaysDate = date.toLocaleDateString()
    console.log('toLocaleDateString: ', todaysDate)
    const match = { date, user1, user2 }

    this.props.createMatch(match)
    console.log('createMatch: ', match)
  }

  render() {

    const { users } = this.props
    const listUser1 = users.map((user, index) =>
      <ListItem key={index} onClick={this.setUser1.bind(this, user)} name={user.name} />
    )
    const listUser2 = users.map((user, index) =>
      <ListItem key={index} onClick={this.setUser2.bind(this, user)} name={user.name} />
    )

    return(
      <div>
        <div>
          <p>Chose first user: </p>
          <ul>
            {listUser1}
          </ul>
          <button onClick={() => console.log(this.state.user1)}>Check State User1</button>
        </div>
        <div>
          <p>Chose second user: </p>
          <ul>
            {listUser2}
          </ul>
          <button onClick={() => console.log(this.state.user2)}>Check State User2</button>
          <button onClick={() => console.log(this.state.date.toLocaleDateString())}>Check Todays Date</button>
        </div>

        <button onClick={this.findPartner.bind(this)}>Find Random Partner</button>
        <button onClick={this.generateMatch.bind(this)}>GENERATE MATCH</button>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps, { fetchUsers, createMatch, subscribeToMatchesService })(MatchGenerator)
