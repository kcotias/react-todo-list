import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './App'

const store = createStore(todoApp)

render(
  <Provider style={{margin: 0}}store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);