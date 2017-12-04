import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from '@application/store'
import Main from '@screens/Main'

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default Application