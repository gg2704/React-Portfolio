import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 id="portfolio">Portfolio Highlights</h1>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col size="md-6">
                        <p>
                            Coming Soon
            </p>

                    </Col>
                    <Col size="md-6">
                        <p>
                            Coming Soon
            </p>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p>
                            Coming Soon
            </p>

                    </Col>
                    <Col size="md-6">
                        <p>
                            Coming Soon
            </p>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">


                    </Col>
                    <Col size="md-6">


                    </Col>
                </Row>
            </Container>

                <br></br>
                 <br></br>
 
        </div>
    );
}

export default Portfolio;
