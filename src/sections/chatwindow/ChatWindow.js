import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'

const ChatWindow = () =>
{

    return(
        <div className={chatwindow.container}>
            <p className={chatwindow.header}>BotAI</p>
            <Chats/>
            <ChatForm/>
        </div>
    )
}

export default ChatWindow;