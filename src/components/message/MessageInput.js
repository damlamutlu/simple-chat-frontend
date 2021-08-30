import axios from "axios";
import React, { useState } from "react";
import './MessageInput.css';

const MessageInput = (props) => {
  const [message, setMessage] = useState();

  const clickedSendHandler = () => {
    if(message === undefined){
        alert("Message can not be empty !");
    }else if(message.length > 255){
        alert("Your message can not be longer than 255 characters !");
    }else{
        axios
        .post("http://localhost:8080/saveMessage", {
          message: message,
          userId: props.user.id,
          time: new Date(),
        })
        .then((response) => {
          if (response.status === 200) {
            setMessage("");
            axios
              .get("http://localhost:8080/messages")
              .then((response) => {
                props.passMessages(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const messageHandler = (event) => {
    setMessage(event.currentTarget.value);
  };

  return (
    <div>
      <input className = "message-input_input"
        type="text"
        placeholder="Please enter your message"
        onChange={messageHandler}
        value={message}
      />
      <button className="button" onClick={clickedSendHandler}>
        <span className="fa fa-paper-plane fa-2x" style={{ color: "#4e4e87" }}>
        </span>
      </button>
    </div>
  );
};

export default MessageInput;
