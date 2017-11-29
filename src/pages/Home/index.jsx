import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

    static PropTypes = {
        list: PropTypes.object.isRequired
    }


    renderList = () => {
        return this.props.list.stories && this.props.list.stories.map((item, idx) => (
            <li key={idx}>{item.title}</li>
        ))
    }

    render() {
        return (
            <div>
                <p>{this.props.list.date}</p>
                <ul>
                    {this.renderList()} 
                </ul>
            </div>
        )
    }
}

export default Home;