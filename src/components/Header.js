import React from 'react'
import { Text, View, Platform } from 'react-native'

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: Platform.select({
      ios: 20,
      android: 0
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header
