import chatcards from './ChatCards.module.css'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { useChat } from '../../contextapi/ChatContext';

const ChatCards = ({query, response, time, chattime, type, chatType, id, rating}) =>
{
    const { editCurrentChat } = useChat();
    const [value, setValue] = useState(0);

    console.log(rating);

    useEffect(() =>
    {
        editCurrentChat(id, value, '')
    },[value])

    return(
        <div className={chatType === "saved" ? `${chatcards.saved} ${chatcards.container}` : chatcards.container}>
            <img src={type === "response" ? logo : user} alt="user"/>
            <div className={chatcards.content}>
                <span>{type === "response" ? 'Soul AI' : 'You' }</span>
                <p>{type === 'response' ? response : query}</p>
                <span className={chatcards.time}>{time ? time : chattime}</span>

                {type==="response" && chatType !== "saved" &&  
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => 
                        {
                            setValue(newValue);
                        }
                    }/>
                }

                {type==="response" && chatType === "saved" &&  rating ?
                    <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                    />
                    :
                    null
                }

            </div>
        </div>
    )
}

export default ChatCards