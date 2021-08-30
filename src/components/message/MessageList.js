import axios from "axios";
import React, { useState } from "react";
import MessageListItem from "./MessageListItem";

const MessageList = (props) => {



  return (
    <div>
      <ul>
        {props.messages === undefined ? null : props.messages.map((message) => (
          <MessageListItem key={message.id} userId={message.userId}  message={message.message} time={message.time} />
        ))}
      </ul>
    </div>
  );
};
export default MessageList;
