import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Let me tell you a little about Myself
            </h1>
            <p className="home-about-body">
              I fell in love with 
              <i>
                <b className="purple"> Programming and Data Architecture. </b>
              </i>
              <br />
              <br />In 2021 i finished my studies as a
              <i>
                <b className="purple"> Data Scientist. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Data Engineering, Cloud Engineering and ETL process.
                </b>
              </i>
              <br />
              <br />
              In my free time I also learn about
              <i>
                <b className="purple"> Linux (Arch)</b>
              </i>
                &nbsp; and
              <i>
                <b className="purple"> Full-Stack</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">
                <a 
                  href="https://www.linkedin.com/in/gonzalo-galante-138762103/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                > connect
                </a>
              </span> with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
