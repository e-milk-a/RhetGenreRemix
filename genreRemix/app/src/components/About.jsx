import React from "react";
import "./About.css";
import alma from "../assets/alma.jpg";
import banner from "../assets/try.jpg";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className = "about-page">
            <div className = "about-section">
                <div className="about-image">
                    <img src={alma} alt="Alma Mater"/>
                </div>
                <div className = "about-text-card">
                    <h1>
                        About Me
                    </h1>
                    <p>
                        Hi, I am a sophomore studying CS at UIUC. I have always had a fondness for math and technology, but this was really cultivated during high school when I joined a coding club and really began to learn how to code. My first (and still favorite) coding language I learned was C#, with which I programmed physics simulations. 
                    </p>
                    <h1>
                        About This Project
                    </h1>
                    <p>
                        For the motivation behind this whole topic, it started my difficulty with finding internship opportunities. Mainly, I was given no interveiws, despite the prestige of the program I am in and my past experiences listed on my resume. I knew that if I could even get one interveiw, I could land a position. But over time, I started doubting my abilities, but also doubting the system that is responsible for sorting through candidates. As I have found in my research, many women have difficulties with entering the technological work force not due to their merit but instead their gender. This is why I decided to follow through with this project.
                    </p>
                </div>
            </div>
            <Link className = "no-change" to = "/brainrot">
                <div className="brainrot">
                    <p>
                        brainrot portal ...
                    </p>
                    <img className="brainrot-portal" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhueTZudjdvOTJhb3ZmZDJneWRybWxubmxkZnVuejhraWw0bmNmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IFrHkIglEOg8Ba/giphy.gif" alt="brainrot" />
                    
                </div>
            </Link>
        </div>
    );
}