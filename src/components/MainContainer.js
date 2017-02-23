import React, { PureComponent }from 'react'

class MainContainer extends PureComponent {
  render() {
    return(
      <div>
        <DailyMatch />
        <HistoryMatches />
      </div>
    )
  }
}

export default MainContainer
