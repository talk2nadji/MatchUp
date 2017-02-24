import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createMatch from '../actions/create-match'
import './MatchGenerator.sass'

class MatchGenerator extends PureComponent {
  constructor(props) {
    super()
    const { date, user1, user2 } = props
    this.state = {
      date: '',
      user1: 'Richard Nadji',
      user2: 'Superman'
    }
  }

  setDate() {
    this.setState({
      date: new Date().toLocaleDateString()
    })
    console.log('date: ', this.state.date)
  }

  //TODO set to current user
  setUser1() {
    this.setState({
      user1: 'Richard Nadji'
    })
  }

  //TODO pick random partner > bonus not same
  findPartner() {
    this.setState({
      user2: 'Lois Lane'
    })
    console.log('partner:', this.state.user2)
  }

  generateMatch() {
    const { date, user1, user2 } = this.state

    const match = { date, user1, user2 }

    //TODO this.props.createMatch(match)
    console.log(match)
  }

  render() {
    return(
      <div>
        <button onClick={this.findPartner.bind(this)}>Find Partner</button>
        <button onClick={this.setDate.bind(this)}>Set Todays Date</button>
        <button onClick={this.generateMatch.bind(this)}>GENERATE MATCH</button>
      </div>
    )
  }
}

export default connect(null, { createMatch })(MatchGenerator)
