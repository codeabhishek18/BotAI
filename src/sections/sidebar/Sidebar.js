import sidebar from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import newchat from '../../assets/newchat.png'
import { useChat } from '../../contextapi/ChatContext'
import { useEffect, useState } from 'react'
import Ratings from '../../components/ratings/Ratings'
import up from '../../assets/up.png'
import down from '../../assets/down.png'

const Sidebar = ({setFlag, setQuery, setDisplaySlider}) =>
{
    const {getCurrentChat, getChatHistory, chatHistory, selectedChatHistory } = useChat();
    const [ displayRatings, setDisplayRatings ] = useState(false);
    const [ displayConvList, setDisplayConvList] = useState(false);

    useEffect(() =>
    {
        getChatHistory();
    },[])

    const handleClick = () =>
    {
        localStorage.removeItem('CurrentChat');
        getCurrentChat();
        setFlag(false);
        setQuery(null)
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

            <p className={sidebar.chat_history}>
                Past Conversations 
                <img src={displayConvList ? up : down } 
                alt="navigation"
                onClick={()=> setDisplayConvList(!displayConvList)}/>
            </p>

            {displayConvList && <div className={sidebar.conversations}>
                {chatHistory?.map((chat, index)=>
                (
                    <span key={index} className={sidebar.pill} onClick={()=>handleChatHistory(index)}>Conversation {index + 1}</span>
                ))}
            </div>}

            <hr></hr>

            <p className={sidebar.ratings} onClick={()=> setDisplayRatings(true)}>Ratings & Feedback</p>

            {displayRatings && <Ratings setDisplayRatings={setDisplayRatings}/>}
            <span className={sidebar.close} onClick={()=> setDisplaySlider(false)}>Close</span>
        </div>
    )
}

export default Sidebar