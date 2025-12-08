// import React from "react";
// import { useNavigate } from "react-router-dom";
// export default function Accomplishments() {

//     const navigate = useNavigate();

//     const btnStyle = {
//         padding: "12px 20px",
//         background: "#2563eb",
//         borderRadius: "8px",
//         border: "none",
//         color: "white",
//         cursor: "pointer",
//         fontSize: "1rem"
//     };

//     const accomplishments = [
//         {
//             id: 1,
//             title: "Gemini LTI Fundamentals",
//             description: "Successfully completed all modules in the Gemini LTI course.",
//             date: "2024-01-22",
//             badgeColor: "#4caf50"
//         },
//         {
//             id: 2,
//             title: "NotebookLM Mastery",
//             description: "Achieved high proficiency in NotebookLM for academic research.",
//             date: "2024-02-10",
//             badgeColor: "#3b82f6"
//         },
//         {
//             id: 3,
//             title: "AI Teaching Excellence",
//             description: "Recognized for implementing AI tools effectively in teaching.",
//             date: "2024-03-05",
//             badgeColor: "#f59e0b"
//         }
//     ];

//     return (
//         <div>
//             <h1 style={{ marginBottom: "20px" }}>Accomplishments</h1>
//             <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
//                 Your certificates, achievements, and milestones.
//             </p>

//             <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
//                 {accomplishments.map(a => (
//                     <div
//                         key={a.id}
//                         style={{
//                             background: "white",
//                             padding: "25px",
//                             borderRadius: "12px",
//                             boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             flexWrap: "wrap"
//                         }}
//                     >
//                         <div>
//                             <h2 style={{ marginBottom: "8px" }}>{a.title}</h2>
//                             <p style={{ marginBottom: "12px", color: "#666" }}>{a.description}</p>
//                             <p style={{ color: "#333", fontWeight: "bold" }}>Completed On: {a.date}</p>
//                         </div>

//                         <div
//                             style={{
//                                 width: "120px",
//                                 height: "120px",
//                                 borderRadius: "15px",
//                                 background: a.badgeColor,
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 color: "white",
//                                 fontSize: "1.2rem",
//                                 fontWeight: "bold",
//                                 boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                                 marginTop: "15px"
//                             }}
//                         >
//                             Badge
//                         </div>
//                         <button onClick={() => navigate("/certificate-viewer")} style={btnStyle}>
//                             View Certificate
//                         </button>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import CertificatePopup from "../components/CertificatePopup";

export default function Accomplishments() {

    const navigate = useNavigate();
    const certRef = useRef();

    const [certificates, setCertificates] = useState([]);
    const [viewCert, setViewCert] = useState(null);

    // Load certificates from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("earnedCertificates")) || [];
        setCertificates(saved);
    }, []);

    const btnStyle = {
        padding: "12px 20px",
        background: "#2563eb",
        borderRadius: "8px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: "1rem",
        marginTop: "15px"
    };

    // Download certificate
    const downloadCertificate = async () => {
        if (!certRef.current) return;

        const canvas = await html2canvas(certRef.current);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "certificate.png";
        link.click();
    };

    return (
        <div style={{
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
    boxSizing: "border-box"
}}>
            <h1 style={{ marginBottom: "20px" }}>Accomplishments</h1>
            <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
                All your certificates, achievements, and course milestones.
            </p>

            {/* No Certificates */}
            {certificates.length === 0 && (
                <div
                    style={{
                        background: "white",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        fontSize: "1.1rem"
                    }}
                >
                    <p>You haven’t earned any certificates yet.</p>
                    <strong>Complete your courses to unlock accomplishments.</strong>
                </div>
            )}

            {/* Achievements List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            transition: "0.2s",
                            cursor: "pointer"
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.01)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >

                        {/* LEFT SIDE – Certificate info */}
                        <div style={{ flex: 1, marginRight: "20px" }}>
                            <h2 style={{ marginBottom: "8px" }}>{cert.courseName}</h2>

                            <p style={{ marginBottom: "12px", color: "#666" }}>
                                Successfully completed the course and earned a certificate.
                            </p>

                            <p style={{ color: "#333", fontWeight: "bold" }}>
                                Earned On: {cert.date} at {cert.time}
                            </p>

                            <button
                                onClick={() => setViewCert(cert)}
                                style={btnStyle}
                            >
                                View Certificate
                            </button>
                            
                        </div>

                        {/* RIGHT SIDE – Badge */}
                        <img 
    src="/badge.jpg" 
    alt="Badge" 
    style={{
        width: "130px",
        height: "130px",
        borderRadius: "50%",
        marginLeft: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    }}
/>


                    </div>
                ))}
            </div>

            {/* POPUP CERTIFICATE VIEWER */}
            {viewCert && (
                <div style={popupBg}>
                    <div style={popupBox}>
                        <CertificatePopup
                            ref={certRef}
                            userName={viewCert.userName}
                            courseName={viewCert.courseName}
                            date={viewCert.date}
                        />

                        <button onClick={downloadCertificate} style={btnStyle}>
                            Download Certificate
                        </button>

                        <button
                            onClick={() => setViewCert(null)}
                            style={{
                                ...btnStyle,
                                background: "#777",
                                marginTop: "10px"
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* POPUP STYLES */
const popupBg = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
};

const popupBox = {
    background: "transparent",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};


const popupBackground = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #e8eaff, #fff8e6, #e6fff3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};
