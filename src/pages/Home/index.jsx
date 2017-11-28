import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.log('Home', this.props)
        return (
            <p>{this.props.list.name}</p>
        )
    }
}


export default Home;