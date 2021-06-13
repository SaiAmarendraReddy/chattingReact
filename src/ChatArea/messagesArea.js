import React, { Component } from "react";
import "../styles/chatArea.css";

class Message extends Component {
    
    render() {
        /* outgoing message means we need to display our name in our side. so just assign 'you' */
        let username = this.props.stle.toString().startsWith('out') ? 'you' : this.props.username;
        return (
            <div className={this.props.stle}>
                <p>{this.props.message}</p>
                <span>Send By : {username}</span>
            </div>
            
        )
    }
}

class MessageDisplay extends Component {
    
    render() {
        return (
            <div className="msgDisplyArea">
                {/* we are sending styles,message, userName as a prop to Message Component */}
                {this.props.message.map((value, index) => <Message stle={value['InOut']} message={value['msg']} key={index} username={value.userName}/>)}
            </div>
        )
    }
}

export default MessageDisplay;