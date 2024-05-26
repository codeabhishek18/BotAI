import { useTheme } from '../../contextapi/ThemeContext'
import hamburgerstyles from './Hamburger.module.css'

const Hamburger = () =>
{
    const { theme } = useTheme();

    return(
        <div className={`${hamburgerstyles.container} ${hamburgerstyles[theme]}`}>
            <div className={`${hamburgerstyles.row} ${hamburgerstyles[theme]}`}></div>
            <div className={`${hamburgerstyles.row} ${hamburgerstyles[theme]}`}></div>
            <div className={`${hamburgerstyles.row} ${hamburgerstyles[theme]}`}></div>
        </div>
    )
}

export default Hamburger