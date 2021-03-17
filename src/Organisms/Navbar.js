import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">DashBoard</Link>
                <Link to="/King">King</Link>
                <Link to="/Emoji">Emoji</Link>
            </div>
        )
    }
}

export default Navbar;