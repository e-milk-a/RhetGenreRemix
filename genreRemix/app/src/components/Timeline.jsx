import React, { useState } from "react";
import "./Timeline.css";

// Graduation data
const graduationData = {
  1980: { women: 33, men: 67 },
  1985: { women: 31, men: 69 },
  1990: { women: 28, men: 72 },
  1995: { women: 25, men: 75 },
  2000: { women: 24, men: 76 },
  2005: { women: 23, men: 77 },
  2010: { women: 22, men: 78 },
  2015: { women: 21, men: 79 },
  2018: { women: 21, men: 79 },
};

export default function ChartTimeline() {
  const [hoveredYear, setHoveredYear] = useState(1980);
  const { women, men } = graduationData[hoveredYear];

  return (
    <div className="chart-container">
      <h2 className="chart-title">Graduation Ratio of CS graduates from Berekeley in {hoveredYear}</h2>
      <p className="chart-description">
        In {hoveredYear}, women earned <strong>{women}%</strong> of
        computer science degrees, while men earned <strong>{men}%</strong>.
        
      </p>

      {/* Bar Chart */}
      <div className = "chart">
        <div className="bar-chart">
            <div className = "bar-wrapper">
                <div className="bar women" style={{ height: `${women}%` }}>
                {women}%
                </div>
                <span className="bar-label">Women</span>
            </div>
            <div className = "bar-wrapper">
                <div className="bar men" style={{ height: `${men}%` }}>
                {men}%
                </div>
                <span className="bar-label">Men</span>
            </div>
        </div>

        {/* Number Line */}
        <div className="number-line">
            {Object.keys(graduationData).map((year) => (
            <div
                key={year}
                className={`year ${hoveredYear === Number(year) ? "active" : ""}`}
                onMouseEnter={() => setHoveredYear(Number(year))}
            >
                {year}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
