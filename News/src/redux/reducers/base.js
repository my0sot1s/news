

import * as types from '../types/base'
const initState = {}

const reducer = (state = initState, { type, data, meta, page = 'default' }) => {
  switch (type) {
    case types.BASE_RESPONSE: {
      return { ...state, [page]: data, meta }
    }
    default:
      return state
  }
}


export default reducer
