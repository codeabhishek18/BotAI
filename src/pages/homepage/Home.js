import { useState } from "react";
import ChatWindow from "../../sections/chatwindow/ChatWindow";
import Sidebar from "../../sections/sidebar/Sidebar";
import home from './Home.module.css'

const Home = () =>
{
    const [flag, setFlag] = useState(false)

    return(
        <div className={home.container}>
            <Sidebar setFlag={setFlag}/>
            <ChatWindow flag={flag}/>
        </div>
    )
}

export default Home;