// container
import React, { Component } from 'react';
import Home from '../pages/Home';

import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const About = () => (
    <div>
        About
    </div>
);

class App extends Component {

    render() {
        return (
            <div className="App">
                <header>
                    react16-react-router4
                </header>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
