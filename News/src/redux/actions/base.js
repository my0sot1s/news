import { apiFetch } from './api'
import * as types from '../types/base'


export const getAction = (link = 'http://vietnamnet.vn/rss/home.rss', page = 'default') => {
  return dispatch => {
    apiFetch(link)
      .then(payload => {
        dispatch(afterGetAction(payload, page))
      })
      .catch(err => {
        dispatch(afterGetAction(err))
      })
  }
}
// type: constants.GET_LIST_IMAGES
export const afterGetAction = ({ data, meta }, page) => ({
  type: types.BASE_RESPONSE,
  data,
  meta,
  page
})

