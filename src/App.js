import React from 'react'
import './Styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Organisms/Header'
import King from './Pages/King'
import Emoji from './Pages/Emoji'
import Dashboard from './Pages/Dashboard'


function App() {
        return(
            <div className="App">
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Dashboard}/>
                        <Route parh="/King" component={King}/>
                        <Route parh="/Emoji" component={Emoji}/>
                    </div>
                </Router>
            </div>
        )
    }

export default App;