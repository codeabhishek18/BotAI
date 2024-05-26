import feedbackstyles from './Feedback.module.css'
import bulb from '../../assets/bulb.png'
import { useState } from 'react';
import { useChat } from '../../contextapi/ChatContext';
import { enqueueSnackbar } from 'notistack'

const Feedback = ({setDisplay, id}) =>
{
    const { editCurrentChat } = useChat();
    const [feedback, setFeedback] = useState('');

    const handleClick = () =>
    {
        editCurrentChat(id, 0, feedback);
        enqueueSnackbar('Feedback recorded, save this conversation to view them here anytime', {variant:'success'})
        setDisplay(false);
    }

    return(
        <div className={feedbackstyles.container}>
            <div className={feedbackstyles.box}>
                <div className={feedbackstyles.header}>
                    <img src={bulb} alt="img"/>
                    <p>Provide Additional Feedback</p>
                </div>
                <input value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
                <div className={feedbackstyles.footer}>
                    <button className={feedbackstyles.submit} onClick={handleClick}>Submit</button>
                    <button className={feedbackstyles.close} onClick={()=>setDisplay(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback