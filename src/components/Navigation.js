import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Face from 'material-ui/svg-icons/action/face'
import FlatButton from 'material-ui/FlatButton'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signIn() {
    history.push('/sign-in')
  }

  goHome() {
    history.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Matches"
        iconElementLeft={<IconButton onClick={this.goHome}><Face /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign in" onClick={this.signIn} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
