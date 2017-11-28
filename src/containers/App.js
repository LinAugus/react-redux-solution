// container
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDataStart } from '../actions';

import Home from '../pages/Home';

import './App.css';

class App extends Component {

    static PropTypes = {
        list: PropTypes.object.isRequired
    }

    componentDidMount() {
        
        this.props.dispatch(fetchDataStart({name: '123'}));
    }

    render() {
        console.log('##', this.props)
        const { list } = this.props;
        return (
            <div className="App">
                <header>
                    <p>react-redux-solution</p>
                    <Home list={list}/>
                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(App);
