import chatcards from './ChatCards.module.css'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'

const ChatCards = ({query, response, type}) =>
{

    const time = () =>
    {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const timing = hour>=12 ? 'PM' : 'AM';
        return hour +':' +minutes +' ' +timing ;
    }

    return(
        <div className={chatcards.container}>
            <img src={type === "response" ? logo : user} alt="user"/>
            <div className={chatcards.content}>
                <span>{type === "response" ? 'Soul AI' : 'You' }</span>
                <p>{type === 'response' ? response : query}</p>
                <span className={chatcards.time}>{time()}</span>
            </div>
        </div>
    )
}

export default ChatCards