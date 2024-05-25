import query from './Query.module.css'
import logo from '../../assets/logo.png'
import { QueryCardData } from '../../data/QueryCardData'
import QueryCard from '../querycard/QueryCard'

const Query = ({setQuery}) =>
{
    return(
        <div className={query.container}>
            <div className={query.header}>
                <h1>How Can I Help You Today?</h1>
                <img src={logo} alt="logo"/>
            </div>
            <div className={query.cards}>
                {QueryCardData.map((data)=>
                (
                    <QueryCard key={data.id} data={data} setQuery={setQuery}/>
                ))}
            </div>
        </div>
    )
}

export default Query