import React, { Component } from 'react'
import Container from './Container'
import MainRouter from '../MainRouter'

import appStore from '../store'
import { Provider } from 'react-redux'

const store = appStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    )
  }
}
