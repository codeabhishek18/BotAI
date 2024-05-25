import { useState } from "react";
import ChatWindow from "../../sections/chatwindow/ChatWindow";
import Sidebar from "../../sections/sidebar/Sidebar";
import home from './Home.module.css'

const Home = () =>
{
    const [query, setQuery] = useState(null);
    const [flag, setFlag] = useState(false)

    return(
        <div className={home.container}>
            <Sidebar setFlag={setFlag} setQuery={setQuery}/>
            <ChatWindow flag={flag} query={query} setQuery={setQuery}/>
        </div>
    )
}

export default Home;