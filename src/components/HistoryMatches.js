import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import './HistoryMatches.sass'
import MatchGenerator from './MatchGenerator'
import fetchMatches from '../actions/fetch-matches'

class HistoryMatches extends PureComponent {
  static propTypes = {
    matches: PropTypes.array,
    fetchMatches: PropTypes.func,
  }

  constructor(props) {
    super()
    this.state = { date: new Date() }
  }

  componentDidMount() {
    //TODO fetch matches only of the currentUser -> hooks
    this.props.fetchMatches()
  }

  toAdminPage() {
    history.push('/admin')
  }

  render() {
    const { matches, currentUser } = this.props
    const listHistory = matches.map((match, index) =>
      <li key={index}>
        <button>{match.date}</button>
      </li>
    )

    return(
      <div>
        { currentUser.isAdmin &&
          <p>Because you are a admin >> <button onClick={this.toAdminPage}>ADMIN PAGE</button></p>
        }
        <h3>History List | Todays date: {this.state.date.toLocaleDateString()}</h3>
        <ul>
          {listHistory}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ matches, currentUser }) => ({
  matches,
  currentUser
})

export default connect(mapStateToProps, { fetchMatches })(HistoryMatches)
