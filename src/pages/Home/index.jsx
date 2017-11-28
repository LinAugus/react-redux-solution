import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

    static PropTypes = {
        list: PropTypes.object.isRequired
    }

    render() {
        return (
            <p>{this.props.list.name}</p>
        )
    }
}


export default Home;