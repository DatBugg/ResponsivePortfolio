import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import scraping from "../../Assets/Projects/scraping.png";
import dhws from "../../Assets/Projects/dhworkshop.png";
import dhws1 from "../../Assets/Projects/dhworkshop1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects that I am working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={scraping}
              isBlog={false}
              title="NewsPaper Scraping"
              description="Small project to scale to scrape newspapers, store titles along with notes and do a sentiment analysis."
              link="https://github.com/DatBugg/Scraping-Newspaper"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={dhws}
              isBlog={false}
              title="Final Proyect Data Science"
              description="Final project for a Data Science course, mostly covering the use of different tools.
              A logistic regression model was trained with the SKLearn library, then mounted in a microservice with flask and shared on both github and docker."
              link="https://github.com/DatBugg/WorkShopDH"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={dhws1}
              isBlog={false}
              title="Properatis Analysis"
              description="Taking a data set of properatis with information on properties in Argentina, we proceed to an exhaustive cleaning and engineering of features to then apply machine learning techniques and be able to predict the value of a property based on certain features."
              link="https://github.com/DatBugg/WorkShop-Properati"
            />
          </Col>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={dhws1}
              isBlog={false}
              title="Portfolio Web"
              description="This website is part of my learning project as a full-stack programmer using the Rect framework."
              link="https://github.com/DatBugg/ResponsivePortfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
