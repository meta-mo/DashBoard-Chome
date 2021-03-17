import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function Emoji() {
    return (
        <div>
            <h1>Emoji</h1>
        </div>
    )
}

ReactDOM.render(
    <Emoji/>,
    document.getElementById('root')
);

export default Emoji;