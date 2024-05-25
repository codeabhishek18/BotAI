import { useState } from "react";
import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'
import Conversation from "../../components/conversation/Conversation";
import Query from "../../components/query/Query";
import { useChat } from "../../contextapi/ChatContext";

const ChatWindow = ({flag, query, setQuery}) =>
{

    return(
        <div className={chatwindow.container}>
            <p className={chatwindow.header}>BotAI</p>
            {flag ? <Conversation/> : (query ? <Chats query={query}/> : <Query setQuery={setQuery}/>)}
            {!flag && <ChatForm setQuery={setQuery}/>}
        </div>
    )
}

export default ChatWindow;