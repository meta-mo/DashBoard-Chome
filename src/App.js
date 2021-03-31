import React from 'react'
import './Styles/App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Organisms/Header'
import King from './Pages/King'
import Emoji from './Pages/Emoji'
import Dashboard from './Pages/Dashboard'

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/Emoji">
                        <Emoji />
                    </Route>
                    <Route path="/King">
                        <King />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}