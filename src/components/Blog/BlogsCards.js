import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogsCards(props) {
  return (
    <a
      className="blog-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.2em" }}
    >
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer>
          {props.title}
          <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.site} target="_blank">
          <i className="cil-external-link">&nbsp;</i>View Project
        </Button>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default BlogsCards;
