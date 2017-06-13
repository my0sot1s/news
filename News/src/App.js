import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import AppContainer from './redux/containers'
const store = configureStore()
if (!__DEV__) console.disableYellowBox = true;
const AppRoot = props => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default AppRoot