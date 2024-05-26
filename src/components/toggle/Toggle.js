import toggle from './Toggle.module.css'
import { useTheme } from '../../contextapi/ThemeContext';

const Toggle = () =>
{
    const { theme, updateTheme } = useTheme();

    return(
        <div className={theme === 'dark' ? `${toggle.container} ${toggle.light}` : `${toggle.container} ${toggle.dark}`} onClick={()=> updateTheme()}>
            <div 
                className={theme === 'dark' ? `${toggle.slider} ${toggle.right}` : `${toggle.slider} ${toggle.left}`}>

            </div>
        </div>
    )
}

export default Toggle;