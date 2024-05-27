import chatcards from './ChatCards.module.css'
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { useChat } from '../../contextapi/ChatContext';
import Feedback from '../feedback/Feedback';
import { useTheme } from '../../contextapi/ThemeContext';
import thumbsup from '../../assets/thumbsup.png';
import thumbsdown from '../../assets/thumbsdown.png';
import { enqueueSnackbar } from 'notistack';

const ChatCards = (
    {query, response, time, chattime, type, chatType, id, rating, feedback}) =>
{
    const { editCurrentChat } = useChat();
    const [ value, setValue ] = useState(0);
    const [ display, setDisplay ] = useState(false);
    const { theme } = useTheme();
    const [ hoverThumbs, setHoverThumbs ] = useState(false);
    const [ like, setLike ] = useState(false);
    const [ dislike, setDislike ] = useState(false);

    useEffect(() =>
    {
        editCurrentChat(id, value, '')
    },[value])

    return(
        <div className={chatType === "saved" ? `${chatcards.saved} ${chatcards.container} ${chatcards[theme]}` : `${chatcards.container} ${chatcards[theme]}`}
             onMouseEnter={()=> setHoverThumbs(true)} onMouseLeave={() => setHoverThumbs(false)}>
            <img src={type === "response" ? logo : user} alt="user"/>
            <div className={chatcards.content}>
                <span>{type === "response" ? 'Soul AI' : 'You' }</span>
                <p>{type === 'response' ? response : query}</p>

                {type==="response" && chatType !== "saved" &&  
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => 
                        {
                            if(newValue>0)
                            {
                                setValue(newValue);
                            }
                        }
                    }/>
                }

                {type==="response" && chatType === "saved" &&  rating ?
                    <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                        style={{marginBottom:'10px'}}
                    />
                    :
                    null
                }

                {type==="response" && chatType !== "saved" &&
                    <button 
                        onClick={()=> setDisplay(true)} 
                        className={`${chatcards.feedback} ${chatcards[theme]}`}>
                            Feedback
                        </button>
                }

                {type==="response" && chatType === "saved" && feedback &&
                    <p className={chatcards.readfeedback}>
                        <span style={{fontWeight:'600'}}>Feedback : </span>
                        {feedback}
                    </p>
                }

                <span className={chatcards.time}>{time ? time : chattime}</span>

                {type==="response" && chatType!=="saved" && <div className={`${chatcards.thumbs} ${chatcards.nofill} ${chatcards[theme]}`}>
                    
                    {hoverThumbs && 
                        <img src={thumbsup} 
                            alt="like" onClick={()=>
                            {   
                                setLike(true); 
                                setDislike(false)
                                enqueueSnackbar("You can also rate and feedback us, if you haven't already")}
                            }
                        />
                    }

                    {hoverThumbs && 
                        <img src={thumbsdown} 
                            alt="dislike" onClick={()=> 
                            {
                                setDislike(true); 
                                setLike(false);
                                enqueueSnackbar("Kindly rate and feedback us, to improve user experience")}
                            }
                        />
                    }
                </div>}

                {type==="response" && <div className={`${chatcards.thumbs} ${chatcards.fill} ${chatcards[theme]}`}>
                    {like && <img src={thumbsup} alt="like"/>}
                    {dislike && <img src={thumbsdown} alt="dislike"/>}
                </div>}

                {display && <Feedback setDisplay={setDisplay} id={id}/>}

            </div>
        </div>
    )
}

export default ChatCards