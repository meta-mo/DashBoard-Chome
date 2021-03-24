import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


function DashBoard() {
    const [data, setData] = useState({ emoji: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://sheets.googleapis.com/v4/spreadsheets/1CH7HF7KGAVw_Iov0PLl3sdlLM5VS4rroWgfXM6Vv0BM/values/A2:B?key=AIzaSyC8RUXFawnGVSpKCWoeAZw3P8HTuKEaPsI'
            );
            setData({emoji: result.data.values});
            console.log(result.data)
        };
        fetchData();
    }, [])

    return (
         <ul>
             { data.emoji.length > 0 && data.emoji.map((item, index) => (
                 <li key={index}>
                     <a href={item[1]}>{item[0]}</a>
                 </li>
             ))}
         </ul>
    );
};

ReactDOM.render(
    <DashBoard/>,
    document.getElementById('root')
);

export default DashBoard;