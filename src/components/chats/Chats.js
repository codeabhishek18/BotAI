import { useEffect, useState } from 'react';
import ChatCards from '../chatcards/ChatCards'
import chats from './Chats.module.css'
import { Responses } from '../../data/Responses';

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
    const [response, setResponse] = useState('');
    const [chatData, setChatData] = useState([]);
    console.log(chatData);

    useEffect(() =>
    {
        setTimeout(()=>
        {
            getResponse();
        },1000)
    },[query])

    useEffect(()=>
    {   
        chatHistory();
    },[response])
    
    const chatHistory = () =>
    {
        const newChat = {id: chatId(), question: query, answer: response} 
        const history = JSON.parse(localStorage.getItem('History'));
        const updatedChat = history ? [...history, newChat] : [newChat];
        setChatData(updatedChat);
        if(!response)
            return;
        localStorage.setItem('History', JSON.stringify(updatedChat));
    }

    const getResponse = () =>
    {
        const pattern = new RegExp(`\\b${query}\\b`,"i")
        const filteredresponse = Responses.filter((data) => pattern.test(data.question.toLocaleLowerCase()));
        setResponse(filteredresponse.length ? filteredresponse[0].response : "Sorry, I'm unable to answer that");
    }

    return(
        <div className={chats.container}>
            {chatData?.map((data)=>
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