import React, { Component } from 'react';
import "../styles/chatArea.css";

class InputData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        }
        this.dataGet = this.dataGet.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    /* when ever change happen in textfield it will update the state  */
    dataGet(e) {
        /* get the data and set to message state */
        this.setState({
            msg: e.target.value
        })
    }

    /* when user click on send button i will send data to chatArea component(gDFChild method) */
    sendData() {
        /* send data to parent */
        this.props.gDFChild({ data: this.state.msg, type: 'outgoing common' });
        /* set back to initial state of msg variable */
        this.setState({
            msg: ''
        })
        /* clear the input filed also */
    }

    render() {
        return (
            <div className="inputData">
                <input type="text" id='sendmsg' size="100" value={this.state.msg} onChange={this.dataGet} placeholder="Enter Message....." />
                <button type="button" onClick={this.sendData}>Send</button>
            </div>)
    }
}

export default InputData;
