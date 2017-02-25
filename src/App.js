import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Navigation from './components/Navigation'
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
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div className="app">
          <Navigation />
            {this.props.children}
          </div>
      </MuiThemeProvider>
    )
  }
}

export default App
