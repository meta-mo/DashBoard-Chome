import React from 'react'
import ReactDOM from 'react-dom'
import '../Styles/Header.scss'

function Header() {
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
    )
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);

export default Header;