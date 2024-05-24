import { useEffect, useState } from 'react';
import ChatCards from '../chatcards/ChatCards'
import chats from './Chats.module.css'
import { Responses } from '../../data/Responses';
import { useChat } from '../../contextapi/ChatContext';

const chatId = () =>
    {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result ='';
    for(let i=0;i<6;i++)
    {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

const Chats = ({query}) =>
{

    const [response, setResponse] = useState(null);
    const { chat, getCurrentChat, updateCurrentChat } = useChat();

    useEffect(()=>
    {
        getCurrentChat();
    },[])

    useEffect(() =>
    {
        getResponse();
    },[query])

    useEffect(()=>
    {   
        chatHistory();
    },[response])
    
    const chatHistory = () =>
    {
        if(query === null)
            return;

        if(response === null)
            return;

        const newChat = {id: chatId(), question: query, answer: response}
        updateCurrentChat(newChat);
    }

    const getResponse = () =>
    {
        const pattern = new RegExp(`\\b${query}\\b`,"i")
        const filteredresponse = Responses.filter((data) => pattern.test(data.question.toLocaleLowerCase()));
        setResponse(filteredresponse.length ? filteredresponse[0].response : "Sorry, I'm unable to answer that");
    }

    return(
        <div className={chats.container}>
            {chat?.map((data)=>
            (
                <div key={data.id}>
                    <ChatCards query={data.question}/>
                    {response && <ChatCards response={data.answer} type="response"/>}
                </div>
            ))}
        </div>
    )
}

export default Chats