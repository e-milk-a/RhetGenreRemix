import React from "react";

export default function PickBrainrot({ image }) {
    return (
        <div className="brainrot-image-box">
            <img className="brainrot-img" src={image} alt="brainrot" />
        </div>
    );
}
