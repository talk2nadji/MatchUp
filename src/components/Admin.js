import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchUsers from '../actions/fetch-users'

class Admin extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {

    const allUsers = this.props.users.map((user, index) =>
      <p key={index}>{user.name}</p>
    )

    return(
      <div>
        <div>
          <p>All users</p>
          {allUsers}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  users
}

export default connect(mapStateToProps, { fetchUsers })(Admin)
