import { useState } from "react";
import "./SplitScreen.css";

export default function SplitScreen() {
  const [hoverSide, setHoverSide] = useState(null);

  const percentage =
    hoverSide === "left" ? 33 :
    hoverSide === "right" ? 21 :
    null;

  return (
    <>
        <div className="split-wrapper">

        {/* LEFT */}
        <div
            className="split left"
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
        >
            <div className="content-box">
            <h2>1980</h2>
            <p><strong>33% women</strong> in Berkeley CS</p>
            <p className="subtext">A higher share than today.</p>
            </div>
        </div>

        {/* CENTER PIE */}
        <div className="center-chart">
            <svg viewBox="0 0 36 36" className="pie">
            <path className="pie-bg" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
                className="pie-fill"
                strokeDasharray={`${percentage ? percentage : 0}, 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.5" className="pie-text">
                {percentage ? percentage + "%" : "--"}
            </text>
            </svg>
        </div>

        {/* RIGHT */}
        <div
            className="split right"
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
        >
            <div className="content-box">
            <h2>2018–2019</h2>
            <p><strong>21% women</strong> in Berkeley CS</p>
            <p className="subtext">Despite equal qualifications.</p>
            </div>
        </div>

        </div>
    </>
  );
}
