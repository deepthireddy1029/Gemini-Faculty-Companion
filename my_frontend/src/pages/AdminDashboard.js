// import React from "react";

// export default function AdminDashboard() {

//     const stats = {
//         totalFaculty: 48,
//         certificatesIssued: 132,
//         avgProgress: 72
//     };

//     return (
//         <div>

//             <h1>Admin Overview</h1>

//             <div style={styles.grid}>

//                 <div style={styles.card}>
//                     <h2>{stats.totalFaculty}</h2>
//                     <p>Total Faculty</p>
//                 </div>

//                 <div style={styles.card}>
//                     <h2>{stats.certificatesIssued}</h2>
//                     <p>Certificates Issued</p>
//                 </div>

//                 <div style={styles.card}>
//                     <h2>{stats.avgProgress}%</h2>
//                     <p>Average Course Progress</p>
//                 </div>

//             </div>
//         </div>
//     );
// }

// const styles = {
//     grid: {
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gap: "20px",
//         marginTop: "30px"
//     },
//     card: {
//         background: "white",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         textAlign: "center"
//     }
// };
import React from "react";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {

    const stats = {
        totalFaculty: 48,
        certificatesIssued: 132,
        avgProgress: 72
    };

    return (
        <div className="admin-dashboard-page">

            <h1 className="admin-dashboard-heading">Admin Overview</h1>

            <div className="admin-grid">

                <div className="admin-card">
                    <h2 className="admin-card-number">{stats.totalFaculty}</h2>
                    <p className="admin-card-label">Total Faculty</p>
                </div>

                <div className="admin-card">
                    <h2 className="admin-card-number">{stats.certificatesIssued}</h2>
                    <p className="admin-card-label">Certificates Issued</p>
                </div>

                <div className="admin-card">
                    <h2 className="admin-card-number">{stats.avgProgress}%</h2>
                    <p className="admin-card-label">Average Course Progress</p>
                </div>

            </div>
        </div>
    );
}
