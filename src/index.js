import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
import MainContainer from './components/MainContainer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Admin from './components/Admin'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainContainer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
