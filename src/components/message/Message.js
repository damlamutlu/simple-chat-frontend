import React from 'react';

const Message = (props) => {
    return (
        <div>
            <h2>
               Welcome {props.username} at Message page !
            </h2>
        </div>
    );

}
export default Message;