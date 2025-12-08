import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ModulePage() {

    const { id, moduleId } = useParams();
    const navigate = useNavigate();

    const courseTitles = {
        1: "Getting started with Gemini LTI",
        2: "How to use Gemini effectively",
        3: "How to use NotebookLM effectively",
        4: "How to give good prompts"
    };

    const title = courseTitles[id];
    const current = parseInt(moduleId);

    // *** Each course has ONE video for all modules ***
    const videoSources = {
        1: "/Course-1-Video.mp4",
        2: "/Course-2-Video.mp4",
        3: "/Course-3-Video.mp4",
        4: "/Course-4-Video.mp4"
    };

    // *** Each course has ONE PDF resource for all modules ***
    const resourceLinks = {
        1: "/resources/course1.pdf",
        2: "/resources/course2.pdf",
        3: "/resources/course3.pdf",
        4: "/resources/course4.pdf"
    };

    const [videoDone, setVideoDone] = useState(false);
    const [resourceDone, setResourceDone] = useState(false);

    useEffect(() => {
        if (videoDone && resourceDone) {
            let saved = parseInt(localStorage.getItem(`course_${id}_progress`) || 0);

            if (current > saved) {
                localStorage.setItem(`course_${id}_progress`, current);

                // update centralized progress object
                let progressObj = JSON.parse(localStorage.getItem("courseProgress")) || {};
                progressObj[id] = Math.min(Math.round((current / 6) * 100), 100);
                localStorage.setItem("courseProgress", JSON.stringify(progressObj));
            }
        }
    }, [videoDone, resourceDone, id, current]);

    return (
        <div>
            <h1>{title}</h1>
            <h2 style={{ marginTop: "10px" }}>Module {moduleId}</h2>

            {/* VIDEO LESSON */}
            <h3 style={{ marginTop: "20px" }}>Video Lesson</h3>

            <video
                controls
                width="100%"
                height="380"
                style={{ borderRadius: "12px" }}
                onEnded={() => setVideoDone(true)}
            >
                <source src={videoSources[id]} type="video/mp4" />
            </video>

            {/* READING MATERIAL */}
            <h3 style={{ marginTop: "25px" }}>Reading Material</h3>
            <p>This module includes reading content that helps you understand concepts in detail.</p>

            {/* ADDITIONAL RESOURCE - PDF */}
            <h3 style={{ marginTop: "25px" }}>Additional Resource</h3>

            <a
                href={resourceLinks[id]}
                target="_blank"
                rel="noreferrer"
                onClick={() => setResourceDone(true)}
                style={{ color: "#2563eb", textDecoration: "underline", fontSize: "1.1rem" }}
            >
                Open Module PDF
            </a>

            <br /><br />

            {/* QUIZ BUTTON */}
            <button
                onClick={() => navigate(`/course/${id}/module/${moduleId}/quiz`)}
                disabled={!(videoDone && resourceDone)}
                style={{
                    marginTop: "30px",
                    padding: "14px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: videoDone && resourceDone ? "#2563eb" : "gray",
                    color: "white",
                    cursor: videoDone && resourceDone ? "pointer" : "not-allowed"
                }}
            >
                Start Quiz
            </button>
        </div>
    );
}


// working with noce designs
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function ModulePage() {

//     const { id, moduleId } = useParams();
//     const navigate = useNavigate();

//     const courseTitles = {
//         1: "Getting started with Gemini LTI",
//         2: "How to use Gemini effectively",
//         3: "How to use NotebookLM effectively",
//         4: "How to give good prompts"
//     };

//     const title = courseTitles[id];
//     const current = parseInt(moduleId);

//     const [videoDone, setVideoDone] = useState(false);
//     const [resourceDone, setResourceDone] = useState(false);

//     useEffect(() => {
//     if (videoDone && resourceDone) {
//         let saved = parseInt(localStorage.getItem(`course_${id}_progress`) || 0);

//         if (current > saved) {
//             localStorage.setItem(`course_${id}_progress`, current);

//             // update centralized progress object
//             let progressObj = JSON.parse(localStorage.getItem("courseProgress")) || {};
//             progressObj[id] = Math.min(Math.round((current / 6) * 100), 100);
//             localStorage.setItem("courseProgress", JSON.stringify(progressObj));
//         }
//     }
// }, [videoDone, resourceDone, id, current]);


//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2 style={{ marginTop: "10px" }}>Module {moduleId}</h2>

//             <h3 style={{ marginTop: "20px" }}>Video Lesson</h3>

//             <video
//                 controls
//                 width="100%"
//                 height="380"
//                 style={{ borderRadius: "12px" }}
//                 onEnded={() => setVideoDone(true)}
//             >
//                 <source src="/sample-video.mp4" type="video/mp4" />
//             </video>

//             <h3 style={{ marginTop: "25px" }}>Reading Material</h3>
//             <p>
//                 This module includes reading content that helps you understand concepts in detail.
//             </p>

//             <h3 style={{ marginTop: "25px" }}>Additional Resource</h3>
//             <a
//                 href="https://www.google.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 onClick={() => setResourceDone(true)}
//                 style={{ color: "#2563eb", textDecoration: "underline" }}
//             >
//                 Click here to open resource
//             </a>
//             <br /><br />
//             <button
//                 onClick={() => navigate(`/course/${id}/module/${moduleId}/quiz`)}
//                 disabled={!(videoDone && resourceDone)}
//                 style={{
//                     marginTop: "30px",
//                     padding: "14px 20px",
//                     borderRadius: "8px",
//                     border: "none",
//                     background: videoDone && resourceDone ? "#2563eb" : "gray",
//                     color: "white",
//                     cursor: videoDone && resourceDone ? "pointer" : "not-allowed"
//                 }}
//             >
//                 Start Quiz
//             </button>
//         </div>
//     );
// }
