import React from 'react';
import MessageInput from './MessageInput';

const Message = (props) => {
    return (
        <div>
            <MessageInput user = {props.user}/>
        </div>
    );

}
export default Message;