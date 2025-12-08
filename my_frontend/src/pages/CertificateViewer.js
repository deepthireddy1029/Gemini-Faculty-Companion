import React from "react";

export default function CertificateViewer() {

    const certificateUrl = "/sample-certificate.png"; // placeholder image

    return (
        <div style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
                width: "80%",
                textAlign: "center"
            }}>
                <h1 style={{ marginBottom: "20px" }}>Certificate</h1>

                <img
                    src={certificateUrl}
                    alt="Certificate"
                    style={{
                        width: "100%",
                        borderRadius: "12px",
                        border: "2px solid #ddd"
                    }}
                />

                <button
                    onClick={() => window.print()}
                    style={{
                        marginTop: "25px",
                        padding: "12px 20px",
                        background: "#059669",
                        color: "white",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Download / Print
                </button>
            </div>
        </div>
    );
}
