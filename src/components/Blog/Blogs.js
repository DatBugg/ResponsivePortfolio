import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arch from "../../Assets/Projects/arch.png";
import corne from "../../Assets/Projects/corne.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Projects that may or may not have a Programming</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={arch}
              link=""
              title="Arch-Linux"
              description="Step-by-step implementation of Arch-Linux."
              site="https://archlinux.org/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={corne}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Corne Keyboard"
              description="Mechanical keyboard assembly and layout customization."
              site="https://github.com/DatBugg/Corne-Keyboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
