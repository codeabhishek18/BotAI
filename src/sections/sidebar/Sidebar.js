import sidebar from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import newchat from '../../assets/newchat.png'
import { useChat } from '../../contextapi/ChatContext'
import { useEffect, useState } from 'react'
import Ratings from '../../components/ratings/Ratings'

const Sidebar = ({setFlag}) =>
{
    const {getCurrentChat, getChatHistory, chatHistory, selectedChatHistory } = useChat();
    const [ displayRatings, setDisplayRatings ] = useState(false);

    useEffect(() =>
    {
        getChatHistory();
    },[])

    const handleClick = () =>
    {
        localStorage.removeItem('CurrentChat');
        setFlag(false);
        getCurrentChat();
    }

    const handleChatHistory = (index) =>
    {
        setFlag(true);
        selectedChatHistory(chatHistory[index]);
    }

    return(
        <div className={sidebar.container}>
            <div className={sidebar.newchat}>
                <img src={logo} alt="logo"/>
                <p>New Chat</p>
                <img 
                    src={newchat} 
                    alt="img"
                    onClick={handleClick}/>
            </div>

            <p className={sidebar.chat_history}>Past Conversations</p>

            {chatHistory?.map((chat, index)=>
            (
                <span key={index} className={sidebar.pill} onClick={()=>handleChatHistory(index)}>Conversation {index + 1}</span>
            ))}

            <hr></hr>

            <p className={sidebar.ratings} onClick={()=> setDisplayRatings(true)}>Ratings & Feedback</p>

            {displayRatings && <Ratings setDisplayRatings={setDisplayRatings}/>}
        </div>
    )
}

export default Sidebar