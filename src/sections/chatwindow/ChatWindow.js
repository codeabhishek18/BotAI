import ChatForm from "../../components/chatform/ChatForm";
import Chats from "../../components/chats/Chats";
import chatwindow from './ChatWindow.module.css'
import Conversation from "../../components/conversation/Conversation";
import Query from "../../components/query/Query";
import Hamburger from "../../components/hamburger/Hamburger";
import Slider from '../../components/slider/Slider'

const ChatWindow = ({flag, query, setQuery, displaySlider, setDisplaySlider}) =>
{
    return(
        <div className={chatwindow.container}>
            <div className={chatwindow.header}>
                <div onClick={()=> setDisplaySlider(true)} className={chatwindow.slider}>
                    <Hamburger/>
                </div>
                {displaySlider && <Slider setDisplaySlider={setDisplaySlider}/>}
                <p className={chatwindow.name}>BotAI</p>
            </div>
            {flag ? <Conversation/> : (query ? <Chats query={query}/> : <Query setQuery={setQuery}/>)}
            {!flag && <ChatForm setQuery={setQuery}/>}
        </div>
    )
}

export default ChatWindow;