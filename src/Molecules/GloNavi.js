import React from 'react'
import ReactDOM from 'react-dom'
import '../Styles/GloNavi.scss'

function GloNavi() {
    return (
        <div>
            <header>
                <h2 className="title">Metamo Dashboard</h2>
                <nav className="nav-menu">
                    <ul className="menu">
                        <li className="menu-item"><a className="menu-link" href="/">Dashboard</a></li>
                        <li className="menu-item"><a className="menu-link" href="/Emoji">Emoji</a></li>
                        <li className="menu-item"><a className="menu-link" href="/King">King</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        // <div className='flexbox'>
        //     <h2>Metamo Dashboard</h2>
        //     <ul className="flex-wrap">
        //         <li><a href="/">Dashboard</a></li>
        //         <li><a href="/Emoji">Emoji</a></li>
        //         <li><a href="/King">King</a></li>
        //     </ul>
        // </div>
    )
}

ReactDOM.render(
    <GloNavi/>,
    document.getElementById('root')
);

export default GloNavi;