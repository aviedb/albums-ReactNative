// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

import React from 'react'
import { AppRegistry } from 'react-native'

import Header from './src/components/header'

const App = () => {
  return (
    <Header headerText={'Albums'}/>
  )
}

AppRegistry.registerComponent('albums', () => App)
