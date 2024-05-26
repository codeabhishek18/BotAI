import { useState } from 'react';
import toggle from './Toggle.module.css'

const Toggle = () =>
{
    const [slide, setSlide] = useState(false)

    return(
        <div className={slide ? `${toggle.container} ${toggle.light}` : `${toggle.container} ${toggle.dark}`} onClick={()=> setSlide(!slide)}>
            <div 
                className={slide ? `${toggle.slider} ${toggle.right}` : `${toggle.slider} ${toggle.left}`}>

            </div>
        </div>
    )
}

export default Toggle;