"use strict";

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.all();
    try {
      const token = await auth.attempt(email, password);
      return token;
    } catch (error) {
      return {
        message: `${error}`,
      };
    }
  }
}

module.exports = SessionController;
