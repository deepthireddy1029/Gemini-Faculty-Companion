// import React, { useState } from "react";

// export default function AdminFacultyReports() {

//     const [openRow, setOpenRow] = useState(null);

//     const toggleRow = (index) => {
//         setOpenRow(openRow === index ? null : index);
//     };

//     const faculty = [
//         {
//             name: "Dr. Prathibha Annem",
//             email: "prathibha.annem@silverleaf.edu",
//             department: "Computer Science",
//             overallProgress: "92%",
//             completedCourses: 3,
//             certificatesCount: 3,
//             certificates: ["Gemini LTI", "Prompting Strategies", "NotebookLM"],
//             courses: [
//                 { course: "Getting Started with Gemini LTI", status: "Completed" },
//                 { course: "Using Gemini Effectively", status: "Completed" },
//                 { course: "NotebookLM for Teaching", status: "Completed" },
//                 { course: "How to Give Good Prompts", status: "In Progress (78%)" }
//             ]
//         },
//         {
//             name: "Prof. Sai Reddy",
//             email: "sai.reddy@silverleaf.edu",
//             department: "Engineering",
//             overallProgress: "81%",
//             completedCourses: 2,
//             certificatesCount: 1,
//             certificates: ["Prompting Strategies"],
//             courses: [
//                 { course: "Getting Started with Gemini LTI", status: "Completed" },
//                 { course: "Using Gemini Effectively", status: "In Progress (62%)" },
//                 { course: "NotebookLM for Teaching", status: "Not Started" },
//                 { course: "How to Give Good Prompts", status: "Completed" }
//             ]
//         },
//         {
//             name: "Prof. Lakshmi Devi",
//             email: "lakshmi.devi@silverleaf.edu",
//             department: "Education",
//             overallProgress: "67%",
//             completedCourses: 1,
//             certificatesCount: 0,
//             certificates: [],
//             courses: [
//                 { course: "Getting Started with Gemini LTI", status: "Completed" },
//                 { course: "Using Gemini Effectively", status: "In Progress (45%)" },
//                 { course: "NotebookLM for Teaching", status: "Not Started" },
//                 { course: "How to Give Good Prompts", status: "Not Started" }
//             ]
//         },
//         {
//             name: "Prof. Manju Lella",
//             email: "manju.lella@silverleaf.edu",
//             department: "Business Administration",
//             overallProgress: "54%",
//             completedCourses: 1,
//             certificatesCount: 1,
//             certificates: ["Using Gemini Effectively"],
//             courses: [
//                 { course: "Getting Started with Gemini LTI", status: "In Progress (33%)" },
//                 { course: "Using Gemini Effectively", status: "Completed" },
//                 { course: "NotebookLM for Teaching", status: "Not Started" },
//                 { course: "How to Give Good Prompts", status: "In Progress (40%)" }
//             ]
//         }
//     ];

//     return (
//         <div style={{ width: "100%" }}>
//             <h1 style={{ marginBottom: "20px" }}>Faculty Monitoring</h1>

//             <table style={styles.table}>
//                 <thead>
//                     <tr style={styles.headerRow}>
//                         <th>Full Name</th>
//                         <th>Email</th>
//                         <th>Department</th>
//                         <th>Courses Completed</th>
//                         <th>Certificates</th>
//                         <th>Overall Progress</th>
//                         <th></th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {faculty.map((f, index) => (
//                         <>
//                             {/* MAIN ROW */}
//                             <tr key={index} style={styles.dataRow}>
//                                 <td>{f.name}</td>
//                                 <td>{f.email}</td>
//                                 <td>{f.department}</td>
//                                 <td>{f.completedCourses}</td>
//                                 <td>{f.certificatesCount}</td>
//                                 <td>{f.overallProgress}</td>

//                                 <td
//                                     style={styles.expandCell}
//                                     onClick={() => toggleRow(index)}
//                                 >
//                                     {openRow === index ? "▲" : "▼"}
//                                 </td>
//                             </tr>

//                             {/* DROPDOWN DETAILS */}
//                             {openRow === index && (
//                                 <tr>
//                                     <td colSpan="7" style={styles.dropdown}>
//                                         <h3 style={{ marginBottom: "10px" }}>Detailed Information</h3>

//                                         <strong>Certificates Earned:</strong>
//                                         <p>
//                                             {f.certificates.length > 0
//                                                 ? f.certificates.join(", ")
//                                                 : "No certificates earned"}
//                                         </p>

//                                         <strong>Course Status:</strong>
//                                         <div style={{ marginTop: "10px" }}>
//                                             {f.courses.map((c, i) => (
//                                                 <div key={i} style={styles.courseRow}>
//                                                     <span>{c.course}</span>
//                                                     <span style={styles.status}>{c.status}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </td>
//                                 </tr>
//                             )}
//                         </>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// const styles = {
//     table: {
//         width: "100%",
//         borderCollapse: "collapse",
//         backgroundColor: "white",
//         borderRadius: "12px",
//         overflow: "hidden",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
//     },
//     headerRow: {
//         background: "#1E3A8A",
//         color: "white",
//         textAlign: "left",
//         height: "55px",
//         fontSize: "15px"
//     },
//     dataRow: {
//         height: "50px",
//         fontSize: "14px",
//         borderBottom: "1px solid #e5e7eb"
//     },
//     expandCell: {
//         cursor: "pointer",
//         textAlign: "center",
//         fontSize: "18px",
//         width: "40px"
//     },
//     dropdown: {
//         background: "#f9fafb",
//         padding: "20px",
//         borderTop: "1px solid #ddd"
//     },
//     courseRow: {
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "8px 0",
//         borderBottom: "1px solid #e5e7eb"
//     },
//     status: {
//         color: "#1f2937",
//         fontWeight: "bold"
//     }
// };
import React, { useState } from "react";
import "../styles/AdminFacultyReports.css";


export default function AdminFacultyReports() {

    const [openRow, setOpenRow] = useState(null);
    const toggleRow = (index) => setOpenRow(openRow === index ? null : index);

    // Updated realistic American professor names
    const faculty = [
    {
        name: "Dr. Emily Johnson",
        email: "emily.johnson@silverleaf.edu",
        department: "Computer Science",
        overallProgress: "92%",
        completedCourses: 3,
        certificatesCount: 3,
        certificates: ["Gemini LTI", "Prompting Strategies", "NotebookLM"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "In Progress (78%)" }
        ]
    },

    {
        name: "Prof. Michael Anderson",
        email: "michael.anderson@silverleaf.edu",
        department: "Engineering",
        overallProgress: "81%",
        completedCourses: 2,
        certificatesCount: 1,
        certificates: ["Prompting Strategies"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (62%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Completed" }
        ]
    },

    {
        name: "Prof. Sarah Thompson",
        email: "sarah.thompson@silverleaf.edu",
        department: "Education",
        overallProgress: "67%",
        completedCourses: 1,
        certificatesCount: 0,
        certificates: [],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (45%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. David Miller",
        email: "david.miller@silverleaf.edu",
        department: "Business Administration",
        overallProgress: "54%",
        completedCourses: 1,
        certificatesCount: 1,
        certificates: ["Using Gemini Effectively"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "In Progress (33%)" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "In Progress (40%)" }
        ]
    },

    {
        name: "Dr. Olivia Martinez",
        email: "olivia.martinez@silverleaf.edu",
        department: "Psychology",
        overallProgress: "89%",
        completedCourses: 3,
        certificatesCount: 2,
        certificates: ["Prompting Strategies", "NotebookLM"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "In Progress (72%)" }
        ]
    },

    {
        name: "Prof. Benjamin Scott",
        email: "benjamin.scott@silverleaf.edu",
        department: "Mathematics",
        overallProgress: "76%",
        completedCourses: 2,
        certificatesCount: 1,
        certificates: ["Gemini LTI"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "In Progress (40%)" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Dr. Hannah Lewis",
        email: "hannah.lewis@silverleaf.edu",
        department: "Nursing",
        overallProgress: "61%",
        completedCourses: 1,
        certificatesCount: 0,
        certificates: [],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (51%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. Jason Walker",
        email: "jason.walker@silverleaf.edu",
        department: "History",
        overallProgress: "85%",
        completedCourses: 2,
        certificatesCount: 2,
        certificates: ["Gemini LTI", "How to Give Good Prompts"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "In Progress (50%)" },
            { course: "How to Give Good Prompts", status: "Completed" }
        ]
    },

    {
        name: "Dr. Laura Peterson",
        email: "laura.peterson@silverleaf.edu",
        department: "Biological Sciences",
        overallProgress: "93%",
        completedCourses: 3,
        certificatesCount: 3,
        certificates: ["NotebookLM", "Gemini LTI", "Prompting Strategies"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "In Progress (82%)" }
        ]
    },

    {
        name: "Prof. William Harris",
        email: "william.harris@silverleaf.edu",
        department: "Political Science",
        overallProgress: "74%",
        completedCourses: 2,
        certificatesCount: 1,
        certificates: ["Gemini LTI"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "In Progress (36%)" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Dr. Sophia Reed",
        email: "sophia.reed@silverleaf.edu",
        department: "Physics",
        overallProgress: "48%",
        completedCourses: 1,
        certificatesCount: 0,
        certificates: [],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (21%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. Matthew Cooper",
        email: "matthew.cooper@silverleaf.edu",
        department: "Economics",
        overallProgress: "83%",
        completedCourses: 2,
        certificatesCount: 2,
        certificates: ["Prompting Strategies", "Gemini LTI"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "In Progress (58%)" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Dr. Natalie Rivera",
        email: "natalie.rivera@silverleaf.edu",
        department: "Chemistry",
        overallProgress: "69%",
        completedCourses: 1,
        certificatesCount: 1,
        certificates: ["NotebookLM"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "In Progress (47%)" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. Andrew Mitchell",
        email: "andrew.mitchell@silverleaf.edu",
        department: "Fine Arts",
        overallProgress: "57%",
        completedCourses: 1,
        certificatesCount: 0,
        certificates: [],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (40%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Dr. Victoria Carter",
        email: "victoria.carter@silverleaf.edu",
        department: "Sociology",
        overallProgress: "91%",
        completedCourses: 3,
        certificatesCount: 3,
        certificates: ["Gemini LTI", "NotebookLM", "Prompting Strategies"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "In Progress (70%)" }
        ]
    },

    {
        name: "Prof. Jacob Ramirez",
        email: "jacob.ramirez@silverleaf.edu",
        department: "Mechanical Engineering",
        overallProgress: "64%",
        completedCourses: 1,
        certificatesCount: 1,
        certificates: ["How to Give Good Prompts"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "In Progress (30%)" },
            { course: "Using Gemini Effectively", status: "Not Started" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Completed" }
        ]
    },

    {
        name: "Dr. Chloe Adams",
        email: "chloe.adams@silverleaf.edu",
        department: "Philosophy",
        overallProgress: "72%",
        completedCourses: 2,
        certificatesCount: 2,
        certificates: ["Gemini LTI", "Prompting Strategies"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "In Progress (43%)" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. Ethan Brooks",
        email: "ethan.brooks@silverleaf.edu",
        department: "Computer Engineering",
        overallProgress: "96%",
        completedCourses: 4,
        certificatesCount: 4,
        certificates: ["Gemini LTI", "NotebookLM", "Prompting Strategies", "Good Prompts"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "Completed" }
        ]
    },

    {
        name: "Dr. Madison Kelly",
        email: "madison.kelly@silverleaf.edu",
        department: "Anthropology",
        overallProgress: "58%",
        completedCourses: 1,
        certificatesCount: 0,
        certificates: [],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "In Progress (35%)" },
            { course: "NotebookLM for Teaching", status: "Not Started" },
            { course: "How to Give Good Prompts", status: "Not Started" }
        ]
    },

    {
        name: "Prof. Lucas Barnes",
        email: "lucas.barnes@silverleaf.edu",
        department: "Environmental Science",
        overallProgress: "87%",
        completedCourses: 3,
        certificatesCount: 2,
        certificates: ["Gemini LTI", "NotebookLM"],
        courses: [
            { course: "Getting Started with Gemini LTI", status: "Completed" },
            { course: "Using Gemini Effectively", status: "Completed" },
            { course: "NotebookLM for Teaching", status: "Completed" },
            { course: "How to Give Good Prompts", status: "In Progress (65%)" }
        ]
    },
];

    return (
        <div style={styles.page}>
            <h1 style={styles.heading}>Faculty Monitoring</h1>

            <table style={styles.table}>
                <thead>
                    <tr style={styles.headerRow}>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Courses Completed</th>
                        <th>Certificates</th>
                        <th>Overall Progress</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {faculty.map((f, index) => (
                        <>
                            {/* MAIN ROW */}
                            <tr
                                key={index}
                                style={styles.dataRow}
                                className="hover-row"
                            >
                                <td style={{ ...styles.col, ...styles.colName }}>{f.name}</td>
<td style={{ ...styles.col, ...styles.colEmail }}>{f.email}</td>
<td style={{ ...styles.col, ...styles.colDept }}>{f.department}</td>
<td style={{ ...styles.col, ...styles.colCourses }}>{f.completedCourses}</td>
<td style={{ ...styles.col, ...styles.colCerts }}>{f.certificatesCount}</td>
<td style={{ ...styles.col, ...styles.colProgress }}>{f.overallProgress}</td>


                                <td
                                    style={styles.expandCell}
                                    onClick={() => toggleRow(index)}
                                >
                                    {openRow === index ? "▲" : "▼"}
                                </td>
                            </tr>

                            {/* DROPDOWN DETAILS */}
                            {openRow === index && (
                                <tr>
                                    <td colSpan="7" style={styles.dropdown}>
                                        <h3 style={{ marginBottom: "15px" }}>Detailed Information</h3>

                                        <strong>Certificates Earned:</strong>
                                        <p style={{ marginBottom: "15px" }}>
                                            {f.certificates.length > 0
                                                ? f.certificates.join(", ")
                                                : "No certificates earned"}
                                        </p>

                                        <strong>Course Status:</strong>
                                        <div style={{ marginTop: "15px" }}>
                                            {f.courses.map((c, i) => (
                                                <div key={i} style={styles.courseRow}>
                                                    <span>{c.course}</span>
                                                    <span style={styles.status}>{c.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        padding: "40px 60px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)",
        boxSizing: "border-box"
    },

    heading: {
        fontSize: "38px",
        fontWeight: "800",
        marginBottom: "30px",
        color: "#1e293b"
    },

    table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0 12px",
        backgroundColor: "transparent"
    },

    headerRow: {
        background: "#1E3A8A",
        color: "white",
        height: "55px",
        fontSize: "16px"
    },
colName: { width: "22%" },
colEmail: { width: "24%" },
colDept: { width: "18%" },
colCourses: { width: "12%", textAlign: "center" },
colCerts: { width: "12%", textAlign: "center" },
colProgress: { width: "12%", textAlign: "center" },

    dataRow: {
    background: "white",
    height: "65px",
    fontSize: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.25s ease",
    verticalAlign: "middle"
},
col: {
    padding: "18px 20px",
    textAlign: "left",
    verticalAlign: "middle"
},

    expandCell: {
        cursor: "pointer",
        textAlign: "center",
        fontSize: "20px",
        width: "50px"
    },

    dropdown: {
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        marginTop: "-10px"
    },

    courseRow: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "15px"
    },

    status: {
        fontWeight: "bold",
        color: "#1e40af"
    }
};
