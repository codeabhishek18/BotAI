import ChatWindow from "../../sections/chatwindow/ChatWindow";
import Sidebar from "../../sections/sidebar/Sidebar";
import home from './Home.module.css'

const Home = () =>
{

    return(
        <div className={home.container}>
            <Sidebar/>
            <ChatWindow/>
        </div>
    )
}

export default Home;