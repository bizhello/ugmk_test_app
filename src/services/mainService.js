import REACT_APP_API_URL from '../utils/api';

class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, message: 'Ошибка запроса' });
    }
    return res.json();
  }

  async getProducts() {
    const res = await fetch(`${this.url}products`, {
      method: 'GET',
      headers: this.headers,
    });
    return this._getResponseData(res);
  }
}

const mainApi = new MainApi({
  url: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default mainApi;
