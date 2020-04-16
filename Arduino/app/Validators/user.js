"use strict";

const Antl = use("Antl");

class user {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: "required",
      email: "required|email|unique:users",
      password: "required",
    };
  }

  get messages() {
    return Antl.list("validation");
  }
}

module.exports = user;
