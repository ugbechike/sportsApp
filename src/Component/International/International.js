import React, { Component } from 'react';
import Search from '../Search/Search';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png'
import { Container, Row, Col } from 'react-bootstrap';
import './International.css';
import { Link } from 'react-router-dom';


class International extends Component {
    state = {
        international : [
            {id: "1", country: "South America", arrow: <span>&gt;</span>},
            {id: "2", country: "Africa", arrow: <span>&gt;</span>},
            {id: "3", country: "Asia", arrow: <span>&gt;</span>},
            {id: "4", country: "Australia", arrow: <span>&gt;</span>},
            {id: "5", country: "Europe", arrow: <span>&gt;</span>},
            {id: "6", country: "North America", arrow: <span>&gt;</span>}
        ],

        clubs : [
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "Arsenal", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Chelsea", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "Liverpool", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "West Ham United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "West Ham United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "West Ham United", arrow: <span>&gt;</span>},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "Fulham", arrow: <span>&gt;</span>}
        ]
    }

    renderInternational = () => {
        let {international} = this.state
        return(

        international.map((value, index) => (
            <Link to = {`/explore-league/:${value.id}`}>
            <Row key={index} className="international">
                <Col xs={6} md={6}>
                    {value.country}
                </Col>
                <Col xs={6} md={6} className="arrows">
                    {value.arrow}
                </Col>
            </Row>
                </Link>
        ))
        );
}

renderClubs = () => {
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




    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <div className="list__head"><span>International</span></div>
                    {this.renderInternational()}
                    <div className="list__head"><span>Clubs</span></div>
                    {this.renderClubs()}
                    <div className="latest__align">Load More</div>
                    </Col>
                    <Col xs={12} md={6}>
                    <Search />
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default International;