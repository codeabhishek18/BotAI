import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'
import Conversation from "../../components/conversation/Conversation";
import Query from "../../components/query/Query";
import Hamburger from "../../components/hamburger/Hamburger";
import Slider from '../../components/slider/Slider'

const ChatWindow = ({query, setQuery, displaySlider, setDisplaySlider,flag, setFlag}) =>
{
    return(
        <div className={chatwindow.container}>
            <div className={chatwindow.header}>
                <div onClick={()=> setDisplaySlider(true)} className={chatwindow.slider}>
                    <Hamburger/>
                </div>
                <div className={chatwindow.heading}>
                    {!flag ? <p className={chatwindow.name}>BotAI</p> : <p className={chatwindow.convheader}>Conversation History</p>}
                </div>
            </div>
            {displaySlider && <Slider setQuery={setQuery} setDisplaySlider={setDisplaySlider} setFlag={setFlag}/>}
            {flag ? <Conversation/> : (query ? <Chats query={query}/> : <Query setQuery={setQuery}/>)}
            {!flag && <ChatForm setQuery={setQuery}/>}
        </div>
    )
}

export default ChatWindow;