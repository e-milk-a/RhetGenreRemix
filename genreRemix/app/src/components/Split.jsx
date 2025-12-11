import React from "react";
import "./Split.css";
import Timeline from "./Timeline"

export default function Split() {
  return (
    <div className="home-split">
      {/* LEFT: Text */}
      <div className="split-section left-text">
        <div className="text-content">
          <h1>Widening of the Gap</h1>
          <p>
            Over the past four decades, the gender gap in computer science has
            not only persisted but worsened. Despite the growing number of women earning
            technical degrees than ever before, the percentage of women in
            computer science programs has steadily declined. 
            <br></br>
            <br></br>     The issue begins early, with educational pathways funneling fewer
            girls into advanced computer science courses in high school. Even
            after getting admitted into top programs, women often encounter
            isolation, lack of mentorship, and assumptions about their
            commitment to long-term careers.
          </p>
          
        </div>
      </div>

      {/* RIGHT: Chart Placeholder */}
      <div className="split-section right-chart">
        <Timeline />
      </div>
    </div>
  );
}
