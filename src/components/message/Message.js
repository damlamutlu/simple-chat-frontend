import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const Message = (props) => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getMessages = (messages) => {
    setMessages(messages);
  };

  return (
    <div className='message'>
      <MessageList messages={messages} />
      <MessageInput user={props.user} passMessages={getMessages} />
    </div>
  );
};
export default Message;
