import { useState } from "react";
import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'
import Conversation from "../../components/conversation/Conversation";

const ChatWindow = ({flag}) =>
{
    const [query, setQuery] = useState(null);
    
    return(
        <div className={chatwindow.container}>
            <p className={chatwindow.header}>BotAI</p>
            {flag ? <Conversation/> : <Chats query={query}/>}
            {!flag && <ChatForm setQuery={setQuery}/>}
        </div>
    )
}

export default ChatWindow;