import querycard from './QueryCard.module.css'

const QueryCard = ({data, setQuery}) =>
{

    return(
        <div className={querycard.container} onClick={()=>setQuery(data.query)}>
            <h1>{data.query}</h1>
            <p>{data.tag}</p>
        </div>
    )
}

export default QueryCard