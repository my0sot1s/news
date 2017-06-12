import React from 'react'
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
// import routerConfig from './configNavigate'
import AppNavigator from './configNavigate'

// const AppNavigator = TabNavigator(routerConfig)

export const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const navigationHelper = props => addNavigationHelpers({
  dispatch: props.dispatch,
  state: props.nav,
})

/**
 * Config navigation
 * @param {Object} props 
 */

const AppNavigations = props => (
  <AppNavigator navigation={navigationHelper(props)} />
)

export default connect(state => ({
  nav: state.nav
}))(AppNavigations)