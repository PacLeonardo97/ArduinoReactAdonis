"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/user/index", "UserController.index");
Route.post("/user/store", "UserController.store").validator("user");

Route.post("/session", "SessionController.store");
