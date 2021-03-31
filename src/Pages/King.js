import React, {useState,useEffect} from 'react'
import axios from 'axios'

function King() {
    const [data, setData] = useState({ emoji: [] });
    const [isLoading, setIsLoading] = useState(false);
    // APIkey = 'https://sheets.googleapis.com/v4/spreadsheets/1CH7HF7KGAVw_Iov0PLl3sdlLM5VS4rroWgfXM6Vv0BM/values/A2:B?key=AIzaSyC8RUXFawnGVSpKCWoeAZw3P8HTuKEaPsI'

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios('https://sheets.googleapis.com/v4/spreadsheets/1CH7HF7KGAVw_Iov0PLl3sdlLM5VS4rroWgfXM6Vv0BM/values/Sheet2!A2:D?key=AIzaSyC8RUXFawnGVSpKCWoeAZw3P8HTuKEaPsI'
            );
            setData({emoji: result.data.values});
            setIsLoading(false);
            console.log(result.data)
        };
        fetchData();
    }, [])

    return (
        <div>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
        <ul className="emoji">
             { data.emoji.length > 0 && data.emoji.map((item, index) => (
                 <li key={index}>
                     <p>{item[0]}</p>
                     <p>{item[1]}</p>
                     <small>{item[2]}</small>
                     <p>{item[3]}</p><br></br>
                 </li>
             ))}
         </ul>
        )}
        </div>
    );
}

export default King;