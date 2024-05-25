import { useState } from 'react';
import { useChat } from '../../contextapi/ChatContext'
import ratings from './Ratings.module.css'

const Ratings = ({setDisplayRatings}) =>
{
    const { feedbackList } = useChat();
    const [ filter, setFilter ] = useState(0);
    const [ sort, setSort ] = useState(null);

    const filteredList = filter>0 ? feedbackList.filter((feed) => feed.rating === filter) : feedbackList;
    const sortedArray = sort ? (sort === "high" ? filteredList.sort((a,b)=>b.rating -a.rating) : filteredList.sort((a,b)=> a.rating-b.rating)) : filteredList;

    return(
        <div className={ratings.container}>
            <div className={ratings.filters}>
                <div className={ratings.filter}>
                    <label>Filter By Rating</label>
                    <select onChange={(e)=>setFilter(Number(e.target.value))}>
                        <option value="">Choose Option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div  className={ratings.sort}>
                    <label>Sort By Rating</label>
                    <select onChange={(e)=>setSort(e.target.value)}>
                        <option value="">Choose Option</option>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                    </select>
                </div>
                <span className={ratings.clear} onClick={()=>
                    {
                        setFilter(0);
                        setSort(null);
                    }
                }>Clear</span>
            </div>
            <div className={ratings.tablediv}>
            <table className={ratings.table}>
                <tr>
                    <th>Ratings</th>
                    <th>Feedbacks</th>
                </tr>
                
                {sortedArray.map((feeds) =>
                (
                    <tr>
                        <td>{feeds.rating}</td>
                        <td>{feeds.feedback}</td>
                    </tr>
                ))}
            </table>
            </div>
            <span className={ratings.close} onClick={()=>setDisplayRatings(false)}>X</span>
        </div>
    )
}

export default Ratings