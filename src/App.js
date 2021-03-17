import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Organisms/Navbar'
import King from './Pages/King'
import Emoji from './Pages/Emoji'
import Dashboard from './Pages/Dashboard'


class App extends Component {
    render() {
        return(
            <div className="App">
                <Router>
                    <div>
                        <Navbar /><hr />
                        <Route exact path="/" component={Dashboard}/>
                        <Route parh="/King" component={King}/>
                        <Route parh="/Emoji" component={Emoji}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;