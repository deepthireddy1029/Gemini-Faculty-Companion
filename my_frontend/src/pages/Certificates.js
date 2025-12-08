
import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import CertificatePopup from "../components/CertificatePopup";

export default function Certificates() {

    const [certificates, setCertificates] = useState([]);
    const [viewCert, setViewCert] = useState(null);
    const certRef = useRef();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("earnedCertificates")) || [];
        setCertificates(saved);
    }, []);

    // Download as image
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
        <div>
            <h1 style={{ marginBottom: "20px" }}>Certificates</h1>
            <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#555" }}>
                View and download your earned certificates.
            </p>

            {/* No certificates */}
            {certificates.length === 0 && (
                <div
                    style={{
                        background: "#fff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        fontSize: "1.1rem"
                    }}
                >
                    <p>You haven’t received any certificates yet.</p>
                    <strong>Complete your courses to earn certificates.</strong>
                </div>
            )}

            {/* Certificates grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "25px"
                }}
            >
                {certificates.map(cert => (
                    <div
                        key={cert.id}
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                        }}
                    >
                        {/* Preview */}
                        <div
                            style={{
                                width: "100%",
                                height: "160px",
                                background: "#f3f4f6",
                                borderRadius: "10px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#999"
                            }}
                        >
                            Certificate Preview
                        </div>

                        <h2 style={{ marginBottom: "8px" }}>{cert.courseName}</h2>

                        <p style={{ color: "#666", marginBottom: "15px" }}>
                            Earned on {cert.date} at {cert.time}
                        </p>

                        <button
                            style={{
                                padding: "12px 20px",
                                background: "#059669",
                                color: "white",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                width: "100%",
                                marginBottom: "10px"
                            }}
                            onClick={() => setViewCert(cert)}
                        >
                            View Certificate
                        </button>

                        <button
                            style={{
                                padding: "12px 20px",
                                background: "#2563eb",
                                border: "none",
                                borderRadius: "8px",
                                color: "white",
                                cursor: "pointer",
                                width: "100%"
                            }}
                            onClick={() => setViewCert(cert)}
                        >
                            Download PDF
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup Certificate Viewer */}
            {viewCert && (
                <div style={popupBg}>
                    <div style={popupBox}>
                        <CertificatePopup
                            ref={certRef}
                            userName={viewCert.userName}
                            courseName={viewCert.courseName}
                            date={viewCert.date}
                        />

                        <button onClick={downloadCertificate} style={btn}>
                            Download Certificate
                        </button>

                        <button onClick={() => setViewCert(null)} style={closeBtn}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* Styles */
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
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    width: "700px"
};

const btn = {
    padding: "12px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px"
};

const closeBtn = {
    marginTop: "15px",
    padding: "10px 20px",
    borderRadius: "8px",
    background: "#777",
    border: "none",
    cursor: "pointer",
    color: "white"
};
