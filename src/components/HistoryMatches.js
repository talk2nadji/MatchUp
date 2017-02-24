import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './HistoryMatches.sass'
import MatchGenerator from './MatchGenerator'

class HistoryMatches extends PureComponent {
  static propTypes = {
    matches: PropTypes.array,
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

const mapStateToProps = ({ matches }) => ({
  matches
})

export default connect(mapStateToProps)(HistoryMatches)
