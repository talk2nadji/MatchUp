import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchUsers from '../actions/fetch-users'
import createMatch from '../actions/create-match'
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
  }

  setUser1(user) {
    console.log('SET_STATE: ', user)
    this.setState({ user1: user.name })
  }

  setUser2(user) {
    console.log('SET_STATE: ', user)
    this.setState({ user2: user.name })
  }

  //TODO pick random partner > bonus not same
  findPartner() {
    console.log('Clicked for random partner (TODO)')
  }

  generateMatch() {
    const { date, user1, user2 } = this.state
    const todaysDate = date.toLocaleDateString()
    console.log('toLocaleDateString: ', todaysDate)
    const match = { todaysDate, user1, user2 }

    this.props.createMatch(match)
  }

  render() {

    const { users } = this.props
    const listUser1 = users.map((user) =>
      <li key={user._id} onClick={this.setUser1.bind(this, user)}>{user.name}</li>
    )
    const listUser2 = users.map((user) =>
      <li key={user._id} onClick={this.setUser2.bind(this, user)}>{user.name}</li>
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

        <button onClick={this.findPartner.bind(this)}>Find Partner</button>
        <button onClick={this.generateMatch.bind(this)}>GENERATE MATCH</button>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps, { fetchUsers, createMatch })(MatchGenerator)
