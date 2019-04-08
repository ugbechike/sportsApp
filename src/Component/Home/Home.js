import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import { Row, Col, Container } from "react-bootstrap";
import './Home.css';
import Ads from '../Ads/Ads';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <FeaturedPost />
                <Container>
                <Row>
                    <Col xs={6} md={10} >
                        <div className="hr__line"></div>
                    </Col>
                    <Col xs={6} md={2}>
                    <p>FEATURED POSTS</p>
                    </Col>
                </Row>
                </Container>
                <Ads />
                <Footer />
            </div>
        );
    }
}

export default Home;