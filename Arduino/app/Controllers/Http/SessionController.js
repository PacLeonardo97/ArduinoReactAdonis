"use strict";

class SessionController {
  async store({ request, auth, response }) {
    const { email, password } = request.all();
    try {
      const token = await auth.attempt(email, password);
      return token;
    } catch (error) {
      return response
        .status(error.status)
        .send({ message: `não foi possível encontrar este email: ${email}` });
    }
  }
}

module.exports = SessionController;
