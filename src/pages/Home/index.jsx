import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <p>{this.props.list.name}</p>
        )
    }
}


export default Home;