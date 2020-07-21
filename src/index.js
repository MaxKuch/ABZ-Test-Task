import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import './fonts/fonts.scss'
import './index.scss'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './components/redux/rootReducer'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
    <Router>
      {app}
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
