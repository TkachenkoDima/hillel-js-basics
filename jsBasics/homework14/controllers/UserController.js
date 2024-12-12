const BaseController = require('./BaseController');

class UserController extends BaseController {
  async login(username, password) {
    return this.post('/Account/v1/Login', { userName: username, password });
  }
}

module.exports = UserController;
