// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/app'
import {createStore, combineReducers} from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from "../components/reducers/rootReducer"
import {Provider} from 'react-redux'




const retirementToolReduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store = {retirementToolReduxStore}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
