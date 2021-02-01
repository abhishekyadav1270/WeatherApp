import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
//import {BrowserRouter as Router,Switch,Route,Link} from'./
export default function RouterDemo() {
    return (
        <div>
            <Router>
                <div>
                    <h2>React Routering</h2>
                </div>
                <nav>
                    <div>
                        <div><Link to={'/'}>Home</Link></div>
                        <div><Link to={'/contact'}>Home</Link></div>
                        <div><Link to={'/about'}>Home</Link></div>
                    </div>
                </nav>
                <br/>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path ='/about' component={About}/>
                </Switch>
            </Router>
        </div>
    )
}
