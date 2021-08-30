import axios from 'axios';
import React, { useState } from 'react';

const MessageInput = (props) => {

    const[message ,setMessage] = useState('');

    const clickedSendHandler = () => {
        axios.post("http://localhost:8080/saveMessage", {
            message : message,
            userId : props.user.id,
            time : new Date()
        }).then(response => {
            if(response.status === 200){
                setMessage('');
            }
        }).catch(error => {
            console.log(error);
        })

    }

    const messageHandler = (event) => {
        setMessage(event.currentTarget.value);
    }

    return (
        <div>
            <input type="text" placeholder = "Please enter your message" onChange={ messageHandler } value={message} /> 
            <button className="button" onClick={clickedSendHandler}>
                <span className="fa fa-paper-plane" style={{ color: "blue" }}> </span>
            </button>
        </div>
    );

}

export default MessageInput;