import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi World, I am <span className="purple">Gonzalo Galante </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            <br />
            <br />
            I love programming, but I also have other passions!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Build Keyboards
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Music
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Series, Movies, Manga and Anime
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Read Fantasy Books
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Never stop playing!"{" "}
          </p>
          <footer className="blockquote-footer">DatBugg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
