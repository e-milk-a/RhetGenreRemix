import React from "react";
import "./HomeBan.css";
import ban1 from "../assets/ban1.jpg";
import ban2 from "../assets/ban2.webp";
import ban3 from "../assets/ban3.jpg";

export default function HomeBan() {
    return (
        <div className = "home">
            <div className = "text">
                <h1 className = "title">
                    The Gender Gap Exists.
                </h1>
                <p>
                    Women continue to be underrepresented in computer science and tech fields despite having equal qualifications. Societal pressures, stereotypes, and systemic biases prevent equitable participation.
                </p>
            </div>
            <div className = "images">
                <img src={ban1} alt = "Women in tech" />
                <img src={ban2} alt = "Women in tech" />
                <img src={ban3} alt = "Women in tech" />
            </div>
        </div>
    );
}