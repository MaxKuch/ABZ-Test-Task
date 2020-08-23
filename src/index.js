import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import {rootReducer} from './components/redux/rootReducer'
import './fonts/fonts.scss'
import './index.scss'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
