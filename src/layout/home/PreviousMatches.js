import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from 'reactstrap';
import Resultslider from './ResultSlider';

export default class PreviousMatches extends React.Component {
    render(){
        return (
            <div>
                <Row className="section-title section-head-outer">
                    <Col md="12">
                        <h2 className="section-title section-head">previous matches</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Resultslider />
                    </Col>
                </Row>
                <Row className="section-link">
                    <Col md="12">
                        <Link to="./Result"><h5>see all<i className="ti-arrow-right ml-3"></i></h5></Link>
                    </Col>
                </Row>
            </div>
        );
    }
}