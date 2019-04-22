import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ExtraTeam.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png';
import Search from '../Search/Search';



class ExtraTeam extends Component {

    state = {
        clubs : [
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "Arsenal", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Chelsea", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "Liverpool", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "West Ham United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham", arrow: <span>&gt;</span>},
        ],

        otherClubs : [
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "Arsenal"},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Chelsea"},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "Liverpool"},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United"},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "West Ham United"},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham"},
        ]
    }

    renderLeague = () => {
        let {clubs} = this.state
    
        return (
        clubs.map((value, index) => (
            <Row key={index} className="international">
            
                <Col xs={6} md = {6} >
                {value.image}{value.club}
                </Col>
    
                <Col xs={6} md = {6} className="arrows" >
                {value.arrow}
                </Col>
            </Row>
        ))
        )
    }

    renderOtherClubs = () => {
        let {otherClubs} = this.state
    
        return (
            otherClubs.map((value, index) => (
            <Row key={index} className="extra__teams">
            <div className="show">
                <Col xs={6} md = {6} >
                {value.image}{value.club}
                </Col>
                </div>
            </Row>
        ))
        )
    }
    

    render() {
        return (
            <Container>
                 <Row>
                    <Col xs={12} md={6}>
                    <div className="list__head"><span>England</span></div>
                    
                    {this.renderLeague()}
                    </Col>
                    <Col xs={12} md={6}>
                    <Search />
                    <div className="cover">
                    {this.renderOtherClubs()}
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ExtraTeam;