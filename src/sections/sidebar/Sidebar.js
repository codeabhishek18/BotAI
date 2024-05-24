import sidebar from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import newchat from '../../assets/newchat.png'
import { useChat } from '../../contextapi/ChatContext'

const Sidebar = () =>
{
    const {getCurrentChat} = useChat();

    const handleClick = () =>
    {
        localStorage.removeItem('CurrentChat');
        getCurrentChat();
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
        </div>
    )
}

export default Sidebar