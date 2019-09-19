import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';
import PartnerSlider from './PartnerSlider';

export default class MainPartners extends React.Component {
    render(){
        return (
            <div className="inner-block section-wrapper">
                <div className="overlay"></div>
                <Container>
                <Row className="section-title section-head-outer">
                    <Col md="12">
                        <h2 className="section-title section-head">main partners</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <PartnerSlider />
                    </Col>
                </Row>
                <Row className="section-link">
                    <Col md="12">
                        <Link to="./Partners"><h5>see all<i className="ti-arrow-right ml-3"></i></h5></Link>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}