import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import { Row, Col, Container } from "react-bootstrap";
import './Home.css';
import Ads from '../Ads/Ads';
import Clubs from '../ClubListing/ClubListing';
import TopTeam from '../TopTeam/TopTeam';
// import Slider from '../Slider/Slider';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <FeaturedPost />
                <Container>
                <Row>
                    <Col xs={6} md={10} >
                        {/* <div className="hr__line"></div> */}
                        <hr className="hr__line" />
                    </Col>
                    <Col xs={6} md={2}>
                    <span className="featured__post">FEATURED POSTS</span>
                    </Col>
                </Row>
                </Container>
                <Ads />
                <Clubs />
                <TopTeam />
                {/* <Slider /> */}
                <Footer />
            </div>
        );
    }
}

export default Home;