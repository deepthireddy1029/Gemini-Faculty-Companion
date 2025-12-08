

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {

//     const navigate = useNavigate();

//     // Load progress for 4 courses
//     const [progress, setProgress] = useState({
//         1: 0,
//         2: 0,
//         3: 0,
//         4: 0
//     });

//     const [certificates, setCertificates] = useState(0);
//     const [communityPosts, setCommunityPosts] = useState(0);

//     useEffect(() => {
//         const savedProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
//         const savedCerts = parseInt(localStorage.getItem("certificates") || 0);
//         const savedCommunity = parseInt(localStorage.getItem("communityPostsCount") || 0);

//         setProgress({
//             1: savedProgress["1"] || 0,
//             2: savedProgress["2"] || 0,
//             3: savedProgress["3"] || 0,
//             4: savedProgress["4"] || 0
//         });

//         setCertificates(savedCerts);
//         setCommunityPosts(savedCommunity);
//     }, []);

//     const courses = [
//         { id: 1, title: "Getting started with Gemini LTI" },
//         { id: 2, title: "How to use Gemini effectively" },
//         { id: 3, title: "How to use NotebookLM effectively" },
//         { id: 4, title: "How to give good prompts" }
//     ];

//     // Total modules completed (each course has 6 modules)
//     const completedModules =
//         Object.values(progress).reduce((acc, p) => acc + Math.round((p / 100) * 6), 0);

//     // Completed courses
//     const completedCourses = Object.keys(progress)
//         .filter(id => progress[id] === 100)
//         .map(Number);

//     // Continue learning: show only courses that are not 100 percent
//     const activeCourses = courses.filter(c =>
//         progress[c.id] > 0 && progress[c.id] < 100
//     );

//     // New courses (not started)
//     const newCourses = courses.filter(c => progress[c.id] === 0);

//     // Combined list to show
//     const coursesToShow = [...activeCourses, ...newCourses];

//     const allCompleted = completedCourses.length === courses.length;

//     return (
//         <div>

//             <h1 style={{ marginBottom: "10px" }}>Welcome Back 👋</h1>

//             <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#444" }}>
//                 Here is your learning overview.
//             </p>

//             {/* Stats Cards */}
//             <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 gap: "20px",
//                 marginBottom: "35px"
//             }}>
//                 <Card title="Courses Enrolled" value="4" />
//                 <Card title="Modules Completed" value={completedModules} />
//                 <Card title="Certificates Earned" value={certificates} />
//                 <Card title="Community Posts" value={communityPosts} />
//             </div>

//             {/* Continue Learning */}
//             {/* Continue Learning */}
// <div
//     style={{
//         background: "white",
//         padding: "25px",
//         borderRadius: "12px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         marginBottom: "35px"
//     }}
// >
//     <h2 style={{ marginBottom: "20px" }}>Continue Learning</h2>

//     {/* Case 1: User completed all courses */}
//     {allCompleted && (
//         <p
//             style={{
//                 fontSize: "1.1rem",
//                 color: "green",
//                 fontWeight: "bold"
//             }}
//         >
//             Congratulations, you have completed all 4 courses.
//         </p>
//     )}

//     {/* Case 2: User has no started courses (all 0%) */}
//     {!allCompleted &&
//         Object.values(progress).every(p => p === 0) && (
//             <>
//                 <p style={{ marginBottom: "15px", color: "#444" }}>
//                     You have not started any course yet. Begin your learning journey.
//                 </p>

//                 {courses.slice(0, 2).map(course => (
//                     <div key={course.id} style={{ marginBottom: "20px" }}>
//                         <strong>{course.title}</strong>
//                         <p>Click to begin this course.</p>

//                         <button
//                             style={btn}
//                             onClick={() => navigate(`/course/${course.id}`)}
//                         >
//                             Start Course
//                         </button>
//                     </div>
//                 ))}
//             </>
//         )}

//     {/* Case 3: Show only active (in progress) courses */}
//     {!allCompleted &&
//         !Object.values(progress).every(p => p === 0) &&
//         courses
//             .filter(c => progress[c.id] > 0 && progress[c.id] < 100)
//             .map(course => (
//                 <div key={course.id} style={{ marginBottom: "20px" }}>
//                     <strong>{course.title}</strong>

//                     <div
//                         style={{
//                             background: "#eee",
//                             height: "10px",
//                             borderRadius: "6px",
//                             overflow: "hidden",
//                             marginTop: "8px"
//                         }}
//                     >
//                         <div
//                             style={{
//                                 width: `${progress[course.id]}%`,
//                                 height: "100%",
//                                 background: "#4caf50"
//                             }}
//                         ></div>
//                     </div>

//                     <p>{progress[course.id]} percent completed</p>

//                     <button
//                         style={btn}
//                         onClick={() => navigate(`/course/${course.id}`)}
//                     >
//                         Resume Course
//                     </button>
//                 </div>
//             ))}
// </div>


//             {/* Support */}
//             <div style={{
//                 background: "white",
//                 padding: "25px",
//                 borderRadius: "12px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
//             }}>
//                 <h2 style={{ marginBottom: "20px" }}>Quick Help</h2>
//                 <button style={btn}>Help & Support</button>
//             </div>
//         </div>
//     );
// }

// function Card({ title, value }) {
//     return (
//         <div style={{
//             background: "white",
//             padding: "20px",
//             borderRadius: "12px",
//             boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//             textAlign: "center"
//         }}>
//             <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>{value}</h2>
//             <p style={{ color: "#666" }}>{title}</p>
//         </div>
//     );
// }

// const btn = {
//     padding: "12px 20px",
//     background: "#2563eb",
//     borderRadius: "8px",
//     border: "none",
//     color: "white",
//     cursor: "pointer",
//     marginTop: "10px",
//     fontSize: "1rem"
// };
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {

    const navigate = useNavigate();
    const firstName = localStorage.getItem("firstName") || "User";
const lastName = localStorage.getItem("lastName") || "";


    const [progress, setProgress] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0
    });

    const [certificates, setCertificates] = useState(0);
    const [communityPosts, setCommunityPosts] = useState(0);

    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
        const savedCerts = parseInt(localStorage.getItem("certificates") || 0);
        const savedCommunity = parseInt(localStorage.getItem("communityPostsCount") || 0);

        setProgress({
            1: savedProgress["1"] || 0,
            2: savedProgress["2"] || 0,
            3: savedProgress["3"] || 0,
            4: savedProgress["4"] || 0
        });

        setCertificates(savedCerts);
        setCommunityPosts(savedCommunity);
    }, []);

    const courses = [
        { id: 1, title: "Getting started with Gemini LTI" },
        { id: 2, title: "How to use Gemini effectively" },
        { id: 3, title: "How to use NotebookLM effectively" },
        { id: 4, title: "How to give good prompts" }
    ];

    const completedModules =
        Object.values(progress).reduce((acc, p) => acc + Math.round((p / 100) * 6), 0);

    const completedCourses = Object.keys(progress)
        .filter(id => progress[id] === 100)
        .map(Number);

    const activeCourses = courses.filter(c =>
        progress[c.id] > 0 && progress[c.id] < 100
    );

    const newCourses = courses.filter(c => progress[c.id] === 0);

    const allCompleted = completedCourses.length === courses.length;

    return (
        <div className="dashboard-bg">

            {/* HEADER */}
<h1 className="dashboard-title">
    Welcome Back, <span style={{ color: "#4f46e5" }}>{firstName} {lastName}</span> 👋
</h1>
            <p className="dashboard-subtitle">Here is your learning overview.</p>

            {/* STATS GRID */}
            <div className="stats-grid">

                <div className="stat-card" style={{ borderTopColor: "#4f46e5" }}>
                    <h2 className="stat-value">4</h2>
                    <p className="stat-label">Courses Enrolled</p>
                </div>

                <div className="stat-card" style={{ borderTopColor: "#059669" }}>
                    <h2 className="stat-value">{completedModules}</h2>
                    <p className="stat-label">Modules Completed</p>
                </div>

                <div className="stat-card" style={{ borderTopColor: "#d97706" }}>
                    <h2 className="stat-value">{certificates}</h2>
                    <p className="stat-label">Certificates Earned</p>
                </div>

                <div className="stat-card" style={{ borderTopColor: "#db2777" }}>
                    <h2 className="stat-value">{communityPosts}</h2>
                    <p className="stat-label">Community Posts</p>
                </div>

            </div>

            {/* CONTINUE LEARNING SECTION */}
            <div className="section-box">

                <h2 className="section-title">Continue Learning</h2>

                {/* No courses started */}
                {!allCompleted &&
                    Object.values(progress).every(p => p === 0) && (
                        <>
                            <p style={{ marginBottom: "15px", color: "#444" }}>
                                You have not started any course yet. Begin your learning now.
                            </p>

                            {courses.slice(0, 2).map(course => (
                                <div key={course.id} className="course-card">
                                    <strong>{course.title}</strong>
                                    <p>Click to begin this course.</p>

                                    <button
                                        className="primary-btn"
                                        onClick={() => navigate(`/course/${course.id}`)}
                                    >
                                        Start Course
                                    </button>
                                </div>
                            ))}
                        </>
                    )}

                {/* Show active courses */}
                {!allCompleted &&
                    !Object.values(progress).every(p => p === 0) &&
                    courses
                        .filter(c => progress[c.id] > 0 && progress[c.id] < 100)
                        .map(course => (
                            <div key={course.id} className="course-card">

                                <strong>{course.title}</strong>

                                <div className="progress-track">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${progress[course.id]}%` }}
                                    ></div>
                                </div>

                                <p>{progress[course.id]} percent completed</p>

                                <button
                                    className="primary-btn"
                                    onClick={() => navigate(`/course/${course.id}`)}
                                >
                                    Resume Course
                                </button>
                            </div>
                        ))}

                {/* All courses completed */}
                {allCompleted && (
                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: "green",
                            fontWeight: "bold"
                        }}
                    >
                        Congratulations, you have completed all 4 courses.
                    </p>
                )}
            </div>

            {/* HELP SECTION */}
            <div className="section-box">
                <h2 className="section-title">Quick Help</h2>
<button className="help-btn" onClick={() => navigate("/help")}>
    Help & Support
</button>
            </div>

        </div>
    );
}
