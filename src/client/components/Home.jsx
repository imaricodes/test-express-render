//socket io instructions for server and client: https://chatgpt.com/c/1d7dc091-ae1d-4606-9934-8db944f894a1





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const Home = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div className="text-red-600">
      Home
      <Link to="/About">
        <button>About</button>
      </Link>
      <div>
        <h1>Socket.IO Chat</h1>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button onClick={sendMessage}>Send</button>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
