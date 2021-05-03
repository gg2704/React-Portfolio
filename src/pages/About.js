import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profile from "../components/Images/profilepic.png"

function About() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="about" id="about">About me</h1>
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col size="md-8">
                        <p>
                            My name is Gabriel Gonzales <br></br> <br></br>
            </p>

                    </Col>
                    <Col size="md-4">
                        <p>
                            <img className="profile" src={profile} alt="Profile Pic" />;

                    </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
