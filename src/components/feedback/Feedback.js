import feedback from './Feedback.module.css'
import bulb from '../../assets/bulb.png'

const Feedback = ({setDisplay}) =>
{
    return(
        <div className={feedback.container}>
            <div className={feedback.box}>
                <div className={feedback.header}>
                    <img src={bulb} alt="img"/>
                    <p>Provide Additional Feedback</p>
                </div>
                <span className={feedback.close} onClick={()=>setDisplay(false)}>X</span>
                <input/>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Feedback