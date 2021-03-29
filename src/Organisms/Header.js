import React from 'react'
import ReactDOM from 'react-dom'
import GloNavi from '../Molecules/GloNavi'

function Header() {
    return (
        <div>
            <GloNavi />
        </div>
    )
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);

export default Header;