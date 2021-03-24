import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import King from './Pages/King'
import Emoji from './Pages/Emoji'
import Dashboard from './Pages/Dashboard'


function App() {
        return(
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Dashboard}/>
                        <Route parh="/King" component={King}/>
                        <Route parh="/Emoji" component={Emoji}/>
                    </div>
                </Router>
            </div>
        )
    }

export default App;