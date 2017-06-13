import RNFetchBlob from 'react-native-fetch-blob'
/**
 * 
 * @param {String} url 
 * @param {String} type 
 * @param {Object} options 
 * @param {Object} body 
 */

const path = 'https://rss2json.com/api.json?rss_url='
export const apiFetch = (url, type, options = {}) => {
  return new Promise((resolve, reject) => {
    const _url = path.concat(url)
    RNFetchBlob
      .config({
        fileCache: false
      })
      .fetch('GET', _url, {
        ...options,
        Accept: 'application/json',
      })
      .then(res => {
        const payload = { data: res.json(), meta: { state: 'success' } }
        resolve(payload)
      })
      .catch(er => {
        const payload = { meta: { state: 'failure', cause: er } }
        reject(payload)
      })
  })
}
