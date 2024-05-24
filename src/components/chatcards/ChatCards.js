import chatcards from './ChatCards.module.css'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'

const ChatCards = ({query, response, time, type, chatType}) =>
{

    return(
        <div className={chatType === "saved" ? `${chatcards.saved} ${chatcards.container}` : chatcards.container}>
            <img src={type === "response" ? logo : user} alt="user"/>
            <div className={chatcards.content}>
                <span>{type === "response" ? 'Soul AI' : 'You' }</span>
                <p>{type === 'response' ? response : query}</p>
                <span className={chatcards.time}>{time}</span>
            </div>
        </div>
    )
}

export default ChatCards