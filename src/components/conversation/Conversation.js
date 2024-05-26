import { useChat } from "../../contextapi/ChatContext"
import { useTheme } from "../../contextapi/ThemeContext"
import ChatCards from "../chatcards/ChatCards"
import conversation from './Conversation.module.css'

const Conversation = () =>
{
    const { selectedChat } = useChat()
    const { theme } = useTheme()

    return(
        <div className={conversation.container}>
            <p className={conversation.day}>Today’s Chats</p>
            {selectedChat.map((data, index) =>
            (
                <div key={index} className={`${conversation.cards} ${conversation[theme]}`}>
                    <ChatCards query={data.question} time={data.time} chatType="saved"/>
                    <ChatCards response={data.answer} type="response" chatType="saved" time={data.time} rating={data.rating} feedback={data.feedback}/>
                </div>
            ))}
        </div>
    )
}

export default Conversation