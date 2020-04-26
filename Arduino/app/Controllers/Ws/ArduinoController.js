"use strict";
const Arduino = use("App/Models/Arduino");
const Database = use("Database");
const SerialPort = require("serialport");
const portSerial = new SerialPort("COM3", { baudRate: 9600 });

class ArduinoController {
  constructor(params) {
    const { socket, request } = params;
    this.socket = socket;
    this.request = request;
    console.log('entrou aqui')
    const HandleArduino = async () => {
      const { type, color } = await Database.collection("arduinos")
        .sort({ field: "asc", _id: -1 })
        .findOne("_id");
      portSerial.write(`${type}\n`);
      socket.broadcastToAll("message", { type, color });
    };

    HandleArduino();
  }

  async onMessage(message) {
    const arduino = new Arduino();
    arduino.color = message.color;
    arduino.type = message.type;
    await arduino.save();
    try {
      portSerial.write(`${arduino.type}\n`);
    } catch (error) {
      console.log(error);
    }
    this.socket.broadcastToAll("message", message);
  }

  onClose() {
    console.log("Closing subscription for room topic", this.socket.topic);
  }
}

module.exports = ArduinoController;
