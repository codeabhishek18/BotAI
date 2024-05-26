import { useState } from 'react';
import { useChat } from '../../contextapi/ChatContext'
import ratings from './Ratings.module.css'
import { useTheme } from '../../contextapi/ThemeContext';

const Ratings = ({setDisplayRatings}) =>
{
    const { updateFeedbackList } = useChat();
    const [ filter, setFilter ] = useState(0);
    const [ sort, setSort ] = useState(null);
    const { theme } = useTheme();

    const ratedList = updateFeedbackList().filter((list)=> list.rating>0 || list.feedback !== '')
    const filteredList = filter>0 ? ratedList.filter((feed) => feed.rating === filter) : ratedList;
    const sortedArray = sort ? (sort === "high" ? filteredList.sort((a,b)=>b.rating -a.rating) : filteredList.sort((a,b)=> a.rating-b.rating)) : filteredList;

    return(
        <div className={ratings.container}>
            <div className={ratings.main}>
            <div className={ratings.filters}>
                <div className={ratings.filter}>
                    <select onChange={(e)=>setFilter(Number(e.target.value))}>
                        <option value="">Filter By</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div  className={ratings.sort}>
                    <select onChange={(e)=>setSort(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                    </select>
                </div>
                <div className={ratings.cleardiv}>
                    <span className={`${ratings.clear} ${ratings[theme]}`} onClick={()=>
                        {
                            setFilter(0);
                            setSort(null);
                        }
                    }>Clear</span>
                </div>
            </div>
            <div className={`${ratings.tablediv} ${ratings[theme]}`}>
            <table className={`${ratings.table} ${ratings[theme]}`}>
                <tr>
                    <th>Ratings</th>
                    <th>Feedbacks</th>
                </tr>
                
                {sortedArray.map((feeds) =>
                (
                    <tr>
                        <td>{feeds.rating === 0 ? 'No ratings' : feeds.rating }</td>
                        <td>{feeds.feedback === '' ? 'No feedback' : feeds.feedback }</td>
                    </tr>
                ))}
                
                {!sortedArray.length && 
                    <tr>
                        <td>No Data</td>
                        <td>No Data</td>
                    </tr>
                }
            </table>
            </div>
            <span className={`${ratings.close} ${ratings[theme]}`} onClick={()=>setDisplayRatings(false)}>X</span>
            </div>
        </div>
    )
}

export default Ratings