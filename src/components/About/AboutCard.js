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
            from <span className="purple"> Argentina.</span>
            <br />
            <br />
            <br />
            Some of my hobbies and passions
          </p>
          <ul>
            <li className="about-activity">
              <i class="fas fa-code"></i> Coding
            </li>
            <li className="about-activity">
              <i class="fas fa-gamepad"></i> Playing Games
            </li>
            <li className="about-activity">
              <i class="fas fa-keyboard"></i> Build my own Keyboards
            </li>
            <li className="about-activity">
              <i class="fas fa-headphones-alt"></i> Music
            </li>
            <li className="about-activity">
              <i class="fas fa-video"></i> Series, Movies, Manga and Anime
            </li>
            <li className="about-activity">
              <i class="fas fa-book"></i> Read Fantasy Books
            </li>
            <li className="about-activity">
              <i class="fas fa-microchip"></i> New Technologies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Technology is a <span className="purple"> game </span> that I will never stop playing..."{" "}
          </p>
          <footer className="blockquote-footer">DatBugg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
