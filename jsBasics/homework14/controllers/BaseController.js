const axios = require('axios');

class BaseController {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://bookstore.toolsqa.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(url, config = {}) {
    return this.api.get(url, config);
  }

  async post(url, data = {}, config = {}) {
    return this.api.post(url, data, config);
  }

  async delete(url, config = {}) {
    return this.api.delete(url, config);
  }

  async put(url, data = {}, config = {}) {
    return this.api.put(url, data, config);
  }
}

module.exports = BaseController;
