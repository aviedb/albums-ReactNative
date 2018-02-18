// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

import React from 'react'
import { AppRegistry, Text } from 'react-native'

const App = () => {
  return (
    <Text>Hello World!</Text>
  )
}

AppRegistry.registerComponent('albums', () => App)
