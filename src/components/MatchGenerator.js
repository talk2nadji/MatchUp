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
      user1: '',
      user2: '',
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }



  //TODO set to user1
  setUser1() {

  }

  setUser2() {

  }

  //TODO pick random partner > bonus not same
  findPartner() {
    return
  }

  generateMatch() {

    const match = { date, user1, user2 }

    this.props.createMatch(match)
    console.log(match)
  }

  render() {

    const allUsers = this.props.users.map((user) =>
      <p key={user._id} onClick={this.setUser1}>{user.name}</p>
    )

    return(
      <div>
        <div>
          User ONE = <p>{}</p>

        </div>
        <div>
          <p>List of all users</p>
          {allUsers}
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
