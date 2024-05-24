import { useEffect, useState } from 'react';
import ChatCards from '../chatcards/ChatCards'
import chats from './Chats.module.css'
import { Responses } from '../../data/Responses';

const Chats = ({query}) =>
{
    const [response, setResponse] = useState('');

    useEffect(() =>
    {
        setTimeout(()=>
        {
            getResponse();
        },1000)
    },[query])

    const getResponse = () =>
    {
        const pattern = new RegExp(`\\b${query}\\b`,"i")
        const filteredresponse = Responses.filter((data) => pattern.test(data.question.toLocaleLowerCase()));
        setResponse(filteredresponse.length ? filteredresponse[0].response : "Sorry, I'm unable to answer that");
    }

    return(
        <div className={chats.container}>
            <ChatCards query={query}/>
            {response && <ChatCards response={response} type="response"/>}
        </div>
    )
}

export default Chats