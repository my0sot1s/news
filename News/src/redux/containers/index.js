import React, { Component } from 'react';
import { View, Dimensions, ScrollView, TouchableOpacity, Text, AppState, Platform } from 'react-native'
import { connect } from 'react-redux'
import Navigation from '../../navigations/navigation'

const { height, width } = Dimensions.get('screen')

const appTitle = 'Zamasu'

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ height }}>
        <Navigation />
      </View>
    )
  }
}



export default connect()(AppContainer)