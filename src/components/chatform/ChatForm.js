import { useState } from 'react';
import chatform from './ChatForm.module.css';

const ChatForm = () =>
{
    const [chat, setChat] = useState(null);

    const handleAsk = () =>
    {

    }

    const handleSave = () =>
    {
            
    }

    return(
        <div className={chatform.container}>
            <input 
                name="chat"
                value={chat}
                onChange={(e)=>setChat(e.target.value)}/>

            <button 
                className={chatform.ask}
                onClick={handleAsk}>
                Ask
            </button>

            <button 
                className={chatform.save}
                onClick={handleSave}>
                Save
            </button>
        </div>
    )
}

export default ChatForm;