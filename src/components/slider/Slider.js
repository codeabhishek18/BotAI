import Sidebar from '../../sections/sidebar/Sidebar'
import slider from './Slider.module.css'

const Slider = ({setQuery, setDisplaySlider, setFlag}) =>
{
    return(
        <div className={slider.container}>
            <Sidebar setQuery={setQuery} setDisplaySlider={setDisplaySlider} setFlag={setFlag} type="slider"/>
        </div>
    )
}

export default Slider