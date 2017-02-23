import React, { PureComponent } from 'react'

class HistoryMatches extends PureComponent {
  render() {

    const history = [ 1, 2, 3, 4, 5 ]
    console.log('HistoryMatches: ', history)
    const listHistory = history.map((match) =>
      <li key={match}>
        <button style={{width:100, height:30}}>{match}</button>
      </li>
    )
    console.log('listHistory: ', listHistory)

    return(
      <div>
        <ul>
          {listHistory}
        </ul>
      </div>
    )
  }
}

export default HistoryMatches
