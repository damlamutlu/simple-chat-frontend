import React, { useState } from "react";
import MessageListItem from "./MessageListItem";
import './MessageList.css';

const MessageList = (props) => {

  return (
    <div className="message-list">
        {props.messages === undefined ? null : props.messages.map((message) => (
          <MessageListItem key={message.id} userId={message.userId}  message={message.message} time={message.time} currentUsername={props.user.username}/>
        ))}
    </div>
  );
};
export default MessageList;
