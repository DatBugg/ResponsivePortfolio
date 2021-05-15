import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div class="row no-gutters">
      <div class="col-md-4">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
      </div>
      <div class="col-md-8">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
      </div>
      </div>
    </Card>
  );
}
export default ProjectCards;

