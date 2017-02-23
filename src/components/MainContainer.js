import React, { PureComponent }from 'react'

import DailyMatch from './DailyMatch'
import HistoryMatches from './HistoryMatches'

class MainContainer extends PureComponent {
  render() {
    return(
      <div>
        <div style={{'height' : '50%', 'width' : '100%'}}>
          <DailyMatch />
        </div>
        <div style={{'height' : '50%', 'width' : '100%'}}>
          <HistoryMatches />
        </div>
      </div>
    )
  }
}

export default MainContainer
