import sidebar from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import newchat from '../../assets/newchat.png'

const Sidebar = () =>
{

    return(
        <div className={sidebar.container}>
            <div className={sidebar.newchat}>
                <img src={logo} alt="logo"/>
                <p>New Chat</p>
                <img src={newchat} alt="img"/>
            </div>

            <p className={sidebar.chat_history}>Past Conversations</p>
        </div>
    )
}

export default Sidebar