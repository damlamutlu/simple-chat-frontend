
import axios from "axios";
import React, { useEffect, useState } from "react";
import './MessageListItem.css';

const MessageListItem = (props) => {
let you = "You";

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
        
        <div className={props.currentUsername === username ? "message-list-item_right" : "message-list-item"}>
            <p className="paragraph paragraph_small">{props.currentUsername === username ? you : username}</p>
            <p className= "paragraph" style={{fontWeight :'bold'}}>{props.message}</p>
            <p className="paragraph paragraph_small">{props.time}</p>
        </div>
    );

}
export default MessageListItem;