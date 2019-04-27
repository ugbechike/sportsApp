import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Matches/Matches.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png';
import './CompFixtures.css';

class CompMatches extends Component {
    state=[
        
        {id:"1", club: "West Ham Un...", logo:  <img className="comp_fixture_match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"2", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
        {id:"3", club: "West Ham Un...", logo:  <img className="comp_fixture_match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"4", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
        {id:"5", club: "West Ham Un...", logo:  <img className="comp_fixture_match__logo" src={Juvey} alt='west'/>, time: "13:00"},
        {id:"6", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea'/>, time: "13:00"},
    ]

        
    

    renderCompMatches = () => {
        return (
            this.state.map((value, index) =>(
                <Row key={index} className="comp_fixture_match__row">
                    <Col xs={5} md={5}>
                    <Row>
                        <Col xs={8} md={8}>{value.club}</Col>
                        <Col xs={4} md={4} className="logo__end">{value.logo}</Col>
                    </Row>
                    </Col>
                    <Col xs={2} md={2} className="comp_fixture_match__time">{value.time}</Col>
                    <Col xs={5} md={5}>
                    <Row>
                        <Col xs={8} md={4} className="logo__end"> {value.logo}</Col>
                        <Col xs={4} md={8} >{value.club}</Col>
                    </Row>
                    </Col>
                </Row>
            ))
        )
    }
    render() {
        return (
            <Container className="match__wrapper">
                <div className='match__today'>UEFA Fixture</div>
                <hr />
                {this.renderCompMatches()}
                <div className="matches__align"> See more  </div>
                
            </Container>
        );
    }
}

export default CompMatches;