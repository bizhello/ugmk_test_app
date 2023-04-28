import REACT_APP_API_URL from '../utils/api'
class MainApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, message: 'Ошибка запроса' })
    }
    return res.json()
  }

  getProducts() {
    return fetch(`${this._url}products`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res)
    })
  }
}

const mainApi = new MainApi({
  url: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
})

export default mainApi
