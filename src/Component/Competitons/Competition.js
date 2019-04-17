import React, { Component } from 'react';
import TopLeagues from '../TopLeagues/TopLeagues';
import Navigation from '../Menu/Nav';


class Competition extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>whats up</h1>
                <TopLeagues />
            </div>
        );
    }
}

export default Competition;