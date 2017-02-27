import React, { PureComponent, PropTypes }from 'react'
import { connect } from 'react-redux'

import DailyMatch from './DailyMatch'
import HistoryMatches from './HistoryMatches'
import './MainContainer.sass'

class MainContainer extends PureComponent {


  render() {
    return(
      <div className="main-container">
        <div className="center">
          <DailyMatch name={this.props.currentUser.name}/>
        </div>
        <div className="center">
          <HistoryMatches />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(MainContainer)
