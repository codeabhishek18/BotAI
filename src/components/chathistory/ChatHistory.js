import ChatCards from "../chatcards/ChatCards"
import chathistory from './ChatHistory.module.css'

const ChatHistory = () =>
{
    return(
        <div className={chathistory.container}>
            <ChatCards/>
            <ChatCards/>
        </div>
    )
}

export default ChatHistory