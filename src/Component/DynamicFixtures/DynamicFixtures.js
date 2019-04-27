import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Teamicon from "../../Assets/hudersfield.svg";
import Teamicon1 from "../../Assets/chelsea.svg";
import '../featuredGames/featuredGames.css';



class DynamicFixtures extends Component {

    state=[
        
        {id:"1", club: "West Ham Un...", logo:  <img className="comp_feature__logo" src={Teamicon1} alt='west'/>, time: "13:00"},
        {id:"2", club: "Chelsea", logo: <img className="comp_feature__logo" src={Teamicon1} alt='chelsea'/>, time: "13:00"},
        {id:"3", club: "West Ham Un...", logo:  <img className="comp_feature__logo" src={Teamicon} alt='west'/>, time: "13:00"},
        {id:"4", club: "Chelsea", logo: <img className="comp_feature__logo" src={Teamicon1} alt='chelsea'/>, time: "13:00"},
        {id:"5", club: "West Ham Un...", logo:  <img className="comp_feature__logo" src={Teamicon} alt='west'/>, time: "13:00"},
        {id:"6", club: "Chelsea", logo: <img className="comp_feature__logo" src={Teamicon1} alt='chelsea'/>, time: "13:00"},
    ]


    renderMatches = () => {
        return (
            this.state.map((value, index) =>(
                <Row key={index} className="match__row">
                    <Col xs={5} md={5}>
                    <Row>
                        <Col xs={8} md={8} className="comp__clubs"><p>{value.club}</p></Col>
                        <Col xs={4} md={4} className="logo__end">{value.logo}</Col>
                    </Row>
                    </Col>
                    <Col xs={2} md={2} className="comp_match__time">{value.time}</Col>
                    <Col xs={5} md={5}>
                    <Row>
                        <Col xs={8} md={4} className="logo__end"> {value.logo}</Col>
                        <Col xs={4} md={8} className="comp__clubs" ><p>{value.club}</p></Col>
                    </Row>
                    </Col>
                </Row>
            ))
        )
    }


    render() {
        return (
            <div>
                <h4 style={{padding: 16}}>6th, December, 2018</h4>
                <div>{this.renderMatches()}</div>
            </div>
        )
    }
}

export default DynamicFixtures;