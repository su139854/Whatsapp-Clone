import React, {useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";

function Chat({ messages}) {
    const [input, setInput] = useState("");

    

    

    const sendMessage =  async (e) => {
        e.preventDefault();

         await axios.post("/messages/new", {
            "message": input,
             "name": "Zak",
              "timestamp": "now",
              "recieved": false,
        }
        );

        setInput("");

    };
    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar/>

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>


                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                      <p className={`chat_message ${message.recieved && 'chat_reciever'}`}>
                      <span className="chat_name">
                          {message.name}
                      </span>
                      {message.message}
                      <span className="chat_timestamp">
                          {message.timestamp}
  
                      </span>
                      
                      
                  </p>
                ))}
              
       
            </div>
            

            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form >
                    
                    <input 
                    value={input} onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                    />

                    <button   type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
    
}

export default Chat
