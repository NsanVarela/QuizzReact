import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class Quizz extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">Quizz</div>
            </div>
        );
    }
}

ReactDOM.render(<Quizz />, document.getElementById("root"));