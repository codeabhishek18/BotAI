import { useState } from 'react';
import chatform from './ChatForm.module.css';
import { useChat } from '../../contextapi/ChatContext';

const ChatForm = ({setQuery}) =>
{
    const [input, setInput] = useState('');
    const {chat, updateChatHistory} = useChat();

    const handleAsk = () =>
    {
        setQuery(input);
        setInput('')
    }

    const handleSave = () =>
    {
        updateChatHistory(chat);
    }

    return(
        <div className={chatform.container}>
            <input
                className={chatform.chat} 
                name="chat"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                required/>

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