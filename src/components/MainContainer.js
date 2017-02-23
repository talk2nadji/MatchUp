import React, { PureComponent }from 'react'

import DailyMatch from './DailyMatch'
import HistoryMatches from './HistoryMatches'
import './MainContainer.sass'

class MainContainer extends PureComponent {
  render() {
    return(
      <div className="main-container">
        <div className="center">
          <DailyMatch />
        </div>
        <div className="center">
          <HistoryMatches />
        </div>
      </div>
    )
  }
}

export default MainContainer
