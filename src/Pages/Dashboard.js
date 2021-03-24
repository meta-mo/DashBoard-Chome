import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


function DashBoard() {
    const [data, setData] = useState({ emoji: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios('https://sheets.googleapis.com/v4/spreadsheets/1CH7HF7KGAVw_Iov0PLl3sdlLM5VS4rroWgfXM6Vv0BM/values/A2:B?key=AIzaSyC8RUXFawnGVSpKCWoeAZw3P8HTuKEaPsI'
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
        <ul>
             { data.emoji.length > 0 && data.emoji.map((item, index) => (
                 <li key={index}>
                     <a href={item[1]}>{item[0]}</a>
                 </li>
             ))}
         </ul>
        )}
        </div>
    );
};

ReactDOM.render(
    <DashBoard/>,
    document.getElementById('root')
);

export default DashBoard;