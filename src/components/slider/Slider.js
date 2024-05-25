import Sidebar from '../../sections/sidebar/Sidebar'
import slider from './Slider.module.css'

const Slider = ({setDisplaySlider}) =>
{
    return(
        <div className={slider.container}>
            <Sidebar setDisplaySlider={setDisplaySlider}/>
        </div>
    )
}

export default Slider