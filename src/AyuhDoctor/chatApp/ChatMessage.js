/* eslint-disable react/react-in-jsx-scope */
import io from "socket.io-client";
import { useEffect, useState } from "react";
import React from "react";
// Initialize socket connection outside the component to ensure it's only created once
const socket = io.connect("http://localhost:3001");

const ChatMessage = () => {
  // Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessageReceived(data.message);
    };

    socket.on("receive_message", handleReceiveMessage);

    // Cleanup function to remove the event listener
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  return (
    <div>
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
};

export default ChatMessage;
