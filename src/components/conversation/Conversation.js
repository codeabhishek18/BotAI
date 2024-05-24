import { useChat } from "../../contextapi/ChatContext"
import ChatCards from "../chatcards/ChatCards"
import conversation from './Conversation.module.css'

const Conversation = () =>
{
    const { selectedChat } = useChat()

    return(
        <div className={conversation.container}>
            {selectedChat.map((data, index) =>
            (
                <div key={index} className={conversation.cards}>
                    <ChatCards query={data.question} time={data.time} chatType="saved"/>
                    <ChatCards response={data.answer} type="response" chatType="saved" time={data.time} rating={data.rating}/>
                </div>
            ))}
        </div>
    )
}

export default Conversation