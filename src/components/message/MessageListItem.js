
import axios from "axios";
import React, { useEffect, useState } from "react";
import './MessageListItem.css';

const MessageListItem = (props) => {

const [username , setUsername] = useState();


useEffect(() =>{
    axios.get('http://localhost:8080/user/id/' + props.userId).then(response => {
        if(response.status === 200){
            setUsername(response.data.username) ;
        }
    }).catch(error => {
        console.log(error);
    })

} , [props.userId]);

    return(
        <div className="message-list-item">
            <p className="message-list-item_small">{username}</p>
            <p style={{fontWeight :'bold'}}>{props.message}</p>
            <p className="message-list-item_small">{props.time}</p>
        </div>
    );

}
export default MessageListItem;