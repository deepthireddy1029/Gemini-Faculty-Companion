// // import React from "react";
// // import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

// // export default function CourseDetails() {
// //     // 2. Initialize useNavigate
// //     const navigate = useNavigate();

// //     const btnStyle = {
// //         padding: "12px 20px",
// //         background: "#2563eb",
// //         borderRadius: "8px",
// //         border: "none",
// //         color: "white",
// //         cursor: "pointer",
// //         fontSize: "1rem"
// //     };

// //     const course = {
// //         title: "Gemini LTI Fundamentals",
// //         description: "Learn the foundation of Gemini LTI, integration workflows, and teaching applications.",
// //         duration: "5 Modules",
// //         level: "Beginner",
// //         instructor: "Dr. Kavitha"
// //     };

// //     const modules = [
// //         "Introduction to Gemini",
// //         "LTI Basics",
// //         "Embedding Gemini in LMS",
// //         "Automations & Tools",
// //         "Final Assessment"
// //     ];

// //     return (
// //         <div>
// //             <h1 style={{ marginBottom: "20px" }}>Course Details</h1>

// //             <div
// //                 style={{
// //                     background: "white",
// //                     padding: "30px",
// //                     borderRadius: "12px",
// //                     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //                     marginBottom: "35px"
// //                 }}
// //             >
// //                 <h2 style={{ marginBottom: "10px" }}>{course.title}</h2>
// //                 <p style={{ marginBottom: "20px", color: "#555" }}>{course.description}</p>

// //                 <p><strong>Instructor:</strong> {course.instructor}</p>
// //                 <p><strong>Modules:</strong> {course.duration}</p>
// //                 <p><strong>Difficulty:</strong> {course.level}</p>
// //             </div>

// //             <div
// //                 style={{
// //                     background: "white",
// //                     padding: "20px",
// //                     borderRadius: "12px",
// //                     boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
// //                 }}
// //             >
// //                 <h3 style={{ marginBottom: "20px" }}>Modules Included</h3>

// //                 <ul style={{ paddingLeft: "18px", lineHeight: "2rem" }}>
// //                     {modules.map((m, i) => (
// //                         <li key={i} style={{ fontSize: "1.05rem" }}>
// //                             {m}
// //                         </li>
// //                     ))}
// //                 </ul>

// //                 <button
// //                     onClick={() => navigate("/modules")} // 3. Add onClick handler
// //                     style={{
// //                         marginTop: "25px",
// //                         padding: "12px 20px",
// //                         background: "#2563eb",
// //                         borderRadius: "8px",
// //                         border: "none",
// //                         color: "white",
// //                         cursor: "pointer",
// //                         fontSize: "1rem"
// //                     }}
// //                 >
// //                     Start Course
// //                 </button>
// //                 <button onClick={() => navigate("/course-review")} style={btnStyle}>
// //                     Review this course
// //                 </button>

// //                 <button onClick={() => navigate("/course-progress")} style={btnStyle}>
// //                     View Progress
// //                 </button>

// //             </div>
// //         </div>
// //     );
// // }

// // new implementation 

//updated with course green percentahe and lock 

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// export default function CourseDetails() {

//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [modules, setModules] = useState([]);

//     useEffect(() => {
//         load();
//     }, []);

//     const load = async () => {
//         const token = localStorage.getItem("token");

//         const res = await axios.get(
//             `http://localhost:8081/api/progress/course/${id}`,
//             { headers: { Authorization: `Bearer ${token}` } }
//         );

//         setModules(res.data.modules);
//     };

//     return (
//         <div>
//             <h1>Course Modules</h1>

//             {modules.map(m => (
//                 <div
//                     key={m.moduleId}
//                     onClick={() => {
//                         if (!m.locked)
//                             navigate(`/course/${id}/module/${m.moduleId}`);
//                     }}
//                     style={{
//                         padding: "15px",
//                         background: m.locked ? "#e5e7eb" : "#2563eb",
//                         color: m.locked ? "#555" : "white",
//                         borderRadius: "10px",
//                         marginBottom: "10px",
//                         cursor: m.locked ? "not-allowed" : "pointer"
//                     }}
//                 >
//                     {m.title}

//                     {m.completed && (
//                         <span style={{ marginLeft: "10px", color: "white" }}>✓</span>
//                     )}
//                 </div>
//             ))}

//             {/* Final Quiz Locked Until All Modules Completed */}
//             <div
//                 onClick={() => {
//                     const unlocked = modules.every(m => m.completed);
//                     if (unlocked) navigate(`/course/${id}/final-quiz`);
//                 }}
//                 style={{
//                     padding: "15px",
//                     background: modules.every(m => m.completed)
//                         ? "#059669"
//                         : "#e5e7eb",
//                     color: modules.every(m => m.completed) ? "white" : "#555",
//                     borderRadius: "10px",
//                     marginTop: "20px",
//                     cursor: modules.every(m => m.completed)
//                         ? "pointer"
//                         : "not-allowed"
//                 }}
//             >
//                 Final Quiz
//             </div>
//         </div>
//     );
// }


import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CourseDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const courseTitles = {
        1: "Getting started with Gemini LTI",
        2: "How to use Gemini effectively",
        3: "How to use NotebookLM effectively",
        4: "How to give good prompts"
    };

    const title = courseTitles[id];

    const modules = [
        "Module 1: Introduction",
        "Module 2: Core Concepts",
        "Module 3: Video Tutorial",
        "Module 4: Practice Tasks",
        "Module 5: Advanced Tips",
        "Module 6: Summary"
    ];

    const progress = parseInt(localStorage.getItem(`course_${id}_progress`) || 0);

    const isLocked = (index) => index >= progress + 1;

    return (
        <div style={{
            padding: "30px",
            minHeight: "100vh",

            /* ⭐ Background NOW works */
            background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)"
        }}>
            <h1>{title}</h1>
            <p style={{ marginBottom: "20px" }}>Complete modules one by one.</p>

            <div>
                {modules.map((m, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            if (!isLocked(index)) {
                                navigate(`/course/${id}/module/${index + 1}`);
                            }
                        }}
                        style={{
                            background: isLocked(index) ? "#e5ebe5ff" : "#35ca55ff",

                            /* ⭐ Card border color */
                            border: isLocked(index) ? "1px solid #ccc" : "1px solid #2563eb",

                            color: isLocked(index) ? "#666" : "#000",
                            padding: "18px",
                            borderRadius: "12px",
                            marginBottom: "15px",
                            cursor: isLocked(index) ? "not-allowed" : "pointer",
                            opacity: isLocked(index) ? 0.6 : 1,

                            /* ⭐ BOX SHADOW ADDED */
                            boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
                        }}
                    >
                        {m}
                    </div>
                ))}
            </div>

            <button
                disabled={progress < 6}
                onClick={() => navigate(`/course/${id}/final-quiz`)}
                style={{
                    marginTop: "25px",
                    padding: "14px 24px",
                    background: progress < 6 ? "gray" : "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: progress < 6 ? "not-allowed" : "pointer",

                    /* ⭐ BUTTON SHADOW */
                    boxShadow: "0 4px 15px rgba(0,0,0,0.18)",

                    fontSize: "16px",
                    fontWeight: "600"
                }}
            >
                Final Quiz
            </button>
        </div>
    );
}
