import React, { Component } from "react";
import "../styles/chatArea.css";
/* import UserDetails from "./userDetails"; */
import InputData from "./inputDetails";
import MessageDisplay from "./messagesArea";

import socketIOClient from 'socket.io-client'

const io = socketIOClient("http://localhost:2255");


class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InOut: '',
            msg: [],
            userName: this.props.username
        }
        this.childData = this.childData.bind(this);
    }

    componentDidMount() {
        /* get msg from server */
        io.on('toclient', (da) => {
            let ary = this.state.msg;
            let details = {
                InOut: da['InOut'],
                msg: da['msg'],
                userName: this.state.userName
            }
            ary.push(details);
            this.setState(
                {
                    msg: ary
                })
        })
    }

    /* child data accessing by parent */
    childData(dataFromChild) {
        /* destruct the data */
        let { type, data } = dataFromChild;
        /* send data */
        io.emit('fromclient', { fromclient: data })

        let ay = this.state.msg;
        let details = {
            InOut: type,
            msg: data,
            userName: this.state.userName
        }
        ay.push(details);

        /* update the state */
        this.setState({
            msg: ay
        })
    }

    render() {

        return (
            <div className="chatArea">
                chatting room
                {/* Messages displaying area */}
                <MessageDisplay message={this.state.msg} />
                {/* input taking from the user */}
                <InputData gDFChild={this.childData} />
            </div>
        )
    }
}

export default ChatArea;