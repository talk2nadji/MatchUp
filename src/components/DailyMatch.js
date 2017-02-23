import React, { PureComponent } from 'react'

import Avatar from './Avatar'
import matchImage from '../images/hands.png'

class DailyMatch extends PureComponent {
  render() {
    return(
      <div>
        <Avatar name="Richard"/>
        <img style={{heigt:100, width:100}} src={matchImage} />
        <Avatar name="Default"/>
      </div>
    )
  }
}

export default DailyMatch
