import { useState } from "react";
import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'

const ChatWindow = () =>
{
    const [query, setQuery] = useState(null);
    
    return(
        <div className={chatwindow.container}>
            <p className={chatwindow.header}>BotAI</p>
            <Chats query={query}/>
            <ChatForm setQuery={setQuery}/>
        </div>
    )
}

export default ChatWindow;