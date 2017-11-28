// container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getList } from '../actions';

import Home from '../pages/Home';

import './App.css';

class App extends Component {

    static PropTypes = {
        list: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
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

// bindActionCreators 让组件感知不到redux的存在
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getList: getList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
