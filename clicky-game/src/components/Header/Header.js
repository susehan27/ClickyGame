import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header row">
        <div className="title col-md-4">{props.title}</div>
        <div className="guess col-md-4">{props.guess}</div>
        <div className="scores col-md-4">
            Score: {props.score} | HighScore: {props.highScore}
        </div>
    </div>
);

export default Header;
