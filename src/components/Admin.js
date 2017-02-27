import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Admin.sass'

import MatchGenerator from './MatchGenerator'

class Admin extends PureComponent {
  static propTypes = {
  }


  render() {
    const { currentUser } = this.props

    return(
      <div className="admin-container">
        <div>
          <h2>Admin Page | Welcome { currentUser.name }</h2>
          <p>_id: { currentUser._id }</p>
          <p>name: { currentUser.name }</p>
          <p>email: { currentUser.email }</p>
          <p>isAdmin: { currentUser.isAdmin ? 'YES' : 'NO' }</p>
        </div>
        <div>
          { currentUser.isAdmin &&
            <MatchGenerator />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(Admin)
