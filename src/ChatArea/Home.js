import React, { Component } from 'react'
import "../styles/chatArea.css";


class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name:''
        }
        this.nameFromField = this.nameFromField.bind(this);
        this.sendName = this.sendName.bind(this);
    }
    nameFromField(e)
    {
        this.setState({name: e.target.value})
    }
    sendName()
    {
        this.props.getName(this.state.name);
    }
    render() {
        return (
            <div className="home">
                {/*  */}
                <label htmlFor='nameField'>Enter Your Name: </label>
                <input type='text' id='nameField'size='25'onChange={this.nameFromField}/>
                <button onClick={this.sendName}>Submit</button>
            </div>
        );
    }
}

export default Home;