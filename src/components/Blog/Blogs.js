import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arch from "../../Assets/Projects/arch.png";
import corne from "../../Assets/Projects/corne.png";
import gcp from "../../Assets/Projects/gcp.jpg";
import notion from "../../Assets/Projects/notion.jpg";

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
              link="https://github.com/DatBugg/Arch-Qtile"
              title="Arch-Linux"
              description="Step-by-step implementation of Arch-Linux."
              site="https://github.com/DatBugg/Arch-Qtile"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={corne}
              link="https://github.com/DatBugg/Corne-Keyboard"
              title="Corne Keyboard"
              description="Mechanical keyboard assembly and layout customization."
              site="https://github.com/DatBugg/Corne-Keyboard"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={gcp}
              link="https://medium.com/@gonzagalante/699129f772a6"
              title="Google Cloud Platform Basics"
              description="How starting in GCP without knowledge."
              site="https://medium.com/@gonzagalante/699129f772a6"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={notion}
              link=""
              title="Notion for Programmers and SRE"
              description="Building"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
