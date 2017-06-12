import { combineReducers } from 'redux'
import base from './base'
import { navReducer } from '../../navigations/navigation'

const rootReducers = combineReducers({
  nav: navReducer,
  base
})

export default rootReducers