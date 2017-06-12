import React from 'react'
import { TabNavigator, DrawerItems } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, Image, Text, View } from 'react-native'
import VnExpress from '../../redux/containers/vnExpress'
import VnNet from '../../redux/containers/vnNet'
import Screen from '../screen'


const AppTabs = TabNavigator({
  VnExpress: {
    screen: VnExpress,
    navigationOptions: {
      tabBarLabel: 'VnExpress',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-home-outline'
          size={27}
          color={tintColor}
        />
      ),
      headerRight: <Text>Right</Text>
    }
  },
  VietnamNet: {
    screen: VnNet,
    navigationOptions: {
      tabBarLabel: 'VietnamNet',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-notifications-outline'
          size={27}
          color={tintColor}
        />
      )
    }
  },
  Dantri: {
    screen: Screen,
    navigationOptions: {
      tabBarLabel: 'DanTri',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-chatboxes-outline'
          size={27}
          color={tintColor}
        />
      )
    }
  },
  Settings: {
    screen: Screen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-settings-outline'
          size={27}
          color={tintColor}
        />
      )
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

const AppConfigs = {
  Home: {
    screen: AppTabs,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routerName,
      headerStyle: {
        // backgroundColor: 'transparent'
      },
    })
  },
}

export default AppTabs