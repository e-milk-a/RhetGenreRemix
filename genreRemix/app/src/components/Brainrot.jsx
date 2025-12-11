import React, { useState } from "react";
import "./Brainrot.css";
import PickBrainrot from "./PickBrainrot";

export default function Brainrot() {
    const brainrotList = [
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHc4YXBiMzNtdnc0cW5pM3N5OWx6Nng3azZlZ3dqYTA5ZXR1dHdoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Ar2otUdwBlKAaw7Vt/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVycnM1NnQ3M2I1OWRxenl6OGlhZWRjN3U5M2pxanQwbGxydTlkaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cJMlR1SsCSkUjVY3iK/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXh2dG45ZjZyYzBpbHZlYmFhd3hpM3FmYmpib3VkZTc0dmRyd24waCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Uk6Mvu1F97FDPuZfm/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmM3aXI3emlkMzRtYWthanptdm1rNnpmN2t6bTI3d2Q2Ymt2dzVtZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8rN9VXNb7dfU792YQt/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbml0cWxrdzhmMWJvY3dzZDJxYThnbmg2eG1qM2Vwb3FnaWEyNTJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY8c5SKwiNf1EtZKGs/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNngybWVlZXJ1c3lubWo1YXJrcDV4ancyMmxqMG95ZWk0eTdkb25mcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OdEagidP5mHLef6FVd/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGEyc2huemQ3bGc2ZGc1MmYzYWl4b3NwbmVudWc4NHFvN2NuODIzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iRTYTAhca7Nj7WVwC8/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFjMzdxYTBkZjZzaWx1bGtiYm14ZmYyMmY4cm1hM2I3dzdwaWp5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xnQU5pDVvRFQsiQgm1/giphy.gif"
    ];

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % brainrotList.length);
    };

    return (
        <div className="brainrot-page">
            {/* Page Content */}
            <PickBrainrot image={brainrotList[index]} />

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    );
}
