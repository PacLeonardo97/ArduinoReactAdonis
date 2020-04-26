import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Ws from "@adonisjs/websocket-client";

const App = () => {
  const [lamp, setLamp] = useState("black");
  const [error, setError] = useState("");
  const [light, setLight] = useState("black");
  const { token } = useSelector(store => store.session.payload?.token);

  const endpoint = Ws("ws://192.168.0.129:3333");
  const chat = endpoint.subscribe("changelight");
  useEffect(() => {
    endpoint
      .withApiToken(token)
      .connect();
  }, [endpoint, token]);

  useEffect(() => {
    try {
      chat.on("message", ({ color }) => {
        setLamp(color);
      });
    } catch (error) {
      console.log("error", error);
      setError("você não tem acesso a esta rota");
    }
  }, [error, chat]);

  const handleMessage = () => {
    try {
      setLight((oldLight) => (oldLight === "black" ? "yellow" : "black"));
      chat.emit("message", {
        color: light,
        type: light === "black" ? 0 : 1,
      });
    } catch (error) {
      console.log("error", error);
      setError("você não tem acesso a esta rota");
    }
  };

  return (
    <>
      {!error ? (
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
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default App;
