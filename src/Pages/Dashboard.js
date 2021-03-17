import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function DashBoard() {

    const [data, setData] = useState({ feeds: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://script.googleusercontent.com/a/macros/jec.ac.jp/echo?user_content_key=dqRsM8n_p6ZGyvqXCUfDG6mbuT-Qz86O8lbI1ipxAEnkuQUUaTy0A-OW1EbAf0xKYb6thHgAAQ59TmVzDj7Jx49xRg-1UDktm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8fPGrlkuOHHbgNqs4pb6vdnE1t0O1aqT-qpuwpeETxkueGDT-H8Z1ya6S52alB4bkCz18zx43oY62bpdyVEY4n3qgRDX39CyLAgMej4hscVk5ujZPuBoXdGGaU2pP6Ntk&lib=MGGcqaLOywiaO_iSMjUjpzp9B2q1ifG7A'
            );

            console.log(result.data)
            setData(result.data)
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>DashBoard</h1>
                {/* {data.feeds.map((feed) => {
                    return (
                        <div>
                            <h1>{feed.title}</h1>
                            <span>{feed.feed_url}</span>
                        </div>
                    )
                })} */}
        </div>
    )
  }

ReactDOM.render(
    <DashBoard/>,
    document.getElementById('root')
);

export default DashBoard;