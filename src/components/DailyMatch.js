import React, { PureComponent } from 'react'

import Avatar from './Avatar'
import matchImage from '../images/hands.png'
import './DailyMatch.sass'

class DailyMatch extends PureComponent {
  render() {
    return(
      <div className="daily-match">
        <Avatar name="Richard"/>
        <img className="image-hands" src={matchImage} />
        <Avatar name="Default"/>
      </div>
    )
  }
}

export default DailyMatch
