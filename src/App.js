import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

import './App.sass'

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App
