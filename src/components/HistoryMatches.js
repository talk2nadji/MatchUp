import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './HistoryMatches.sass'

class HistoryMatches extends PureComponent {
  static propTypes = {
    matches: PropTypes.array,
  }

  render() {
    const listHistory = this.props.matches.map((match, index) =>
      <li key={index}>
        <button style={{width:100, height:30}}>{match.date}</button>
      </li>
    )

    return(
      <div>
        <ul>
          {listHistory}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ matches }) => ({
  matches
})

export default connect(mapStateToProps)(HistoryMatches)
