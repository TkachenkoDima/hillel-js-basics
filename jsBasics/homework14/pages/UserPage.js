const UserController = require('../controllers/userController');

class UserPage {
  constructor() {
    this.userController = new UserController();
  }

  async login(username, password) {
    const response = await this.userController.login(username, password);
    return response.data;
  }
}

module.exports = UserPage;
