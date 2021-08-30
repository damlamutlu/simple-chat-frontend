import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import './Message.css';

const Message = (props) => {
  const [messages, setMessages] = useState();
  const [user , setUser] = useState();

  useEffect(() => {
    if(props.user === undefined){
        setUser(JSON.parse(localStorage.getItem("user")));
    }else{
        setUser(props.user);
    }
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
      <MessageList messages={messages} user={user} />
      <MessageInput user={user} passMessages={getMessages} />
    </div>
  );
};
export default Message;
