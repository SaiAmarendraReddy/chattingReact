import { useState } from 'react';
import './App.css';
import ChatArea from "./ChatArea/chatArea";
import Home from "./ChatArea/Home";

function App() {

  let [userName, setUserName] = useState('');
  /* set the userName */
  const name = (dt) => {
    setUserName(dt);
  }

  return (
    <div className="App">
      {/* heading */}
      <header className="head">
        Chatting Application
      </header>
      {/* if user name is not empty then open chat area else home page */}
      {userName !== '' ? <ChatArea username={userName} /> : <Home getName={name} />}
    </div>
  );
}

export default App;
