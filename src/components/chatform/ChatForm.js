import { useState } from 'react';
import chatform from './ChatForm.module.css';
import { useChat } from '../../contextapi/ChatContext';
import { enqueueSnackbar } from 'notistack';
import { UseTheme } from '../../contextapi/ThemeContext';
import classNames from 'classnames';

const ChatForm = ({setQuery}) =>
{
    const [ input, setInput ] = useState('');
    const { chat, updateChatHistory } = useChat();
    const { theme } = UseTheme();

    const handleAsk = () =>
    {
        if(input === '')
            return enqueueSnackbar("It seems like you've entered an empty query, go again", {variant:'error'})
        setQuery(input);
        setInput('')
    }

    const handleSave = () =>
    {
        if(!chat)
            return enqueueSnackbar("You're yet to start your new conversation", {variant:'warning'})
        updateChatHistory(chat);
        enqueueSnackbar('Conversation saved. Check your past conversations to view them', {variant:'success'})
    }

    return(
        <div className={chatform.container}>
            <input
                className={`${chatform.chat} ${chatform[theme]}`}
                name="chat"
                placeholder="Message"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                required/>

            <button 
                className={`${chatform.ask} ${chatform[theme]}`}
                onClick={handleAsk}>
                Ask
            </button>

            <button 
                className={classNames(chatform.save, chatform[theme])}
                onClick={handleSave}>
                Save
            </button>
        </div>
    )
}

export default ChatForm;