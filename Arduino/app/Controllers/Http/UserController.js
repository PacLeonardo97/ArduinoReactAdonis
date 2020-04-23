"use strict";
const User = use("App/Models/User");

class UserController {
  async index({ request }) {
    const { page } = request.get();
    const users = await User.query().paginate(page);
    return users;
  }

  async store({ request }) {
    const { username, email, password } = request.all();
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;

    await user.save();
    return user;
  }
}

module.exports = UserController;
