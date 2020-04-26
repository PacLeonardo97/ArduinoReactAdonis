"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArduinoSchema extends Schema {
  up() {
    this.create("arduinos", (table) => {
      table.increments();
      table.string("color");
      table.string("type");
      table.timestamps();
    });
  }

  down() {
    this.drop("arduinos");
  }
}

module.exports = ArduinoSchema;
