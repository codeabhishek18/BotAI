import { UseTheme } from '../../contextapi/ThemeContext'
import querycard from './QueryCard.module.css'

const QueryCard = ({data, setQuery}) =>
{
    const { theme } = UseTheme();

    return(
        <div 
            className={`${querycard.container} ${querycard[theme]}` } 
            onClick={()=>setQuery(data.query)}>
            <h1>{data.query}</h1>
            <p>{data.tag}</p>
        </div>
    )
}

export default QueryCard