import React, { forwardRef } from "react";

const CertificatePopup = forwardRef(({ userName, courseName, date }, ref) => {
    return (
        <div
            ref={ref}
            style={{
                width: "800px",
                padding: "40px",
                background: "white",
                border: "12px solid #d4af37",
                borderRadius: "10px",
                fontFamily: "serif",
                textAlign: "center",
                margin: "auto"
            }}

        >
            <img 
    src="/badge.jpg" 
    alt="Badge" 
    style={{ width: "120px", marginBottom: "15px" }} 
/>

            <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
                SILVERLEAF UNIVERSITY
            </h1>

            <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
                Certificate of Completion
            </h2>

            <p style={{ fontSize: "20px", marginBottom: "10px" }}>
                This certifies that
            </p>

            <h2 style={{ fontSize: "30px", margin: "10px 0", fontWeight: "bold" }}>
                {userName}
            </h2>

            <p style={{ fontSize: "20px", marginBottom: "20px" }}>
                has successfully completed the course
            </p>

            <h2 style={{ fontSize: "26px", marginBottom: "30px" }}>
                {courseName}
            </h2>

            <p style={{ fontSize: "18px", marginBottom: "40px" }}>
                Date: {date}
            </p>

            <div style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "18px" }}>______________________________</p>
<p style={{ fontSize: "18px", marginTop: "5px" }}>Dr. William Anderson</p>
<p style={{ fontSize: "16px" }}>Head of Department</p>

            </div>
        </div>
    );
});

export default CertificatePopup;
