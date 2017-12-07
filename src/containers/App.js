// container
import React, { Component } from 'react';
import Home from '../pages/Home';

import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

const About = (params) => {
    console.log(params)
    return (
        <div>
            About
        </div>
    )
}

const NotFound = () => (
    <div>404</div>
)

class App extends Component {

    render() {
        return (
            <div className="App">
                <header>
                    switch component && 404 
                </header>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/post">Post</Link></li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
