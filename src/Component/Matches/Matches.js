import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Matches.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png'

class Matches extends Component {
    state=[
        
        {id:"1", club: "West Ham Un...", logo:  <img className="match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"2", club: "Chelsea", logo: <img className="match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
        {id:"3", club: "West Ham Un...", logo:  <img className="match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"4", club: "Chelsea", logo: <img className="match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
        {id:"5", club: "West Ham Un...", logo:  <img className="match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"6", club: "Chelsea", logo: <img className="match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
    ]

        
    

    renderMatches = () => {
        return (
            this.state.map((value, index) =>(
                <Row key={index} className="match__row">
                    <Col xs={5} md={5}>{value.club}{value.logo}</Col>
                    <Col xs={2} md={2} className="match__time">{value.time}</Col>
                    <Col xs={5} md={5}> {value.logo}{value.club}</Col>
                </Row>
            ))
        )
    }
    render() {
        return (
            <Container className="match__wrapper">
                <div className='match__today'>Today's Matches</div>
                <hr />
                {this.renderMatches()}
                <div className="matches__align"> See more  </div>
                
            </Container>
        );
    }
}

export default Matches;