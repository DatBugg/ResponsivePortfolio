import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Sidebar() {
    return (
        <Container fluid className="sidebar">
        <Row>
            <Col md={12} className="home-about-social">
                <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                    href="https://github.com/DatBugg"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/gonzalo-galante-138762103/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.instagram.com/datbugg/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    >
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                </ul>
            </Col>
        </Row>
        </Container>
    );
}

export default Sidebar;
