import React from 'react';
import {Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {withRouter} from 'react-router-dom';


 class Pageheader extends React.Component {
    render(){
        const { location } = this.props;
        return (
                    <Row>
                        <Col md="12">
                        <Breadcrumb>
                            <BreadcrumbItem><i className="ti-arrow-left back" onClick={this.props.history.goBack}></i></BreadcrumbItem>
                            {/* <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>{location.pathname}</BreadcrumbItem> */}
                        </Breadcrumb>
                        </Col>
                    </Row>
        );
    }
}

export default withRouter(Pageheader);