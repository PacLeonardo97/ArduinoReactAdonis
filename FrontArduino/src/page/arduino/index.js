import React, { useState, useEffect } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Ws from "@adonisjs/websocket-client";

const App = () => {
  const [lamp, setLamp] = useState("black");
  const [light, setLight] = useState("black");
  const endpoint = Ws("ws://192.168.1.103:3333");
  const chat = endpoint.subscribe("changelight");

  useEffect(() => {
    endpoint.connect();
  }, [endpoint]);

  useEffect(() => {
    chat.on("message", ({ color }) => {
      setLamp(color);
    });
  });

  const handleMessage = () => {
    setLight((oldLight) => (oldLight === "black" ? "yellow" : "black"));
    chat.emit("message", {
      color: light,
      type: light === "black" ? 0 : 1,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button id="blue" onClick={handleMessage}>
        trocar a cor
      </button>
      <br />
      <EmojiObjectsIcon
        style={{ color: lamp, fontSize: "150px", cursor: "pointer" }}
        onClick={handleMessage}
      />
    </div>
  );
};

export default App;
