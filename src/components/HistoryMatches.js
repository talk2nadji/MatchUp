import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './HistoryMatches.sass'
import MatchGenerator from './MatchGenerator'
import fetchMatches from '../actions/fetch-matches'
import fetchUsers from '../actions/fetch-users'

class HistoryMatches extends PureComponent {
  static propTypes = {
    matches: PropTypes.array,
    fetchMatches: PropTypes.func,
    fetchUsers: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchMatches()
    this.props.fetchUsers()
  }

  render() {
    const listHistory = this.props.matches.map((match, index) =>
      <li key={index}>
        <button>{match.date}</button>
      </li>
    )

    return(
      <div>
        <ul>
          {listHistory}
        </ul>
        <br></br>
        <MatchGenerator />
      </div>
    )
  }
}

const mapStateToProps = ({ matches, users }) => ({
  matches,
  users
})

export default connect(mapStateToProps, { fetchMatches, fetchUsers })(HistoryMatches)
