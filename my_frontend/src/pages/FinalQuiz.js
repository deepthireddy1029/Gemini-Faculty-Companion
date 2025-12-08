import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import CertificatePopup from "../components/CertificatePopup";

export default function FinalQuiz() {

    const { id } = useParams();
    const certificateRef = useRef();

    const courseNames = {
        1: "Getting started with Gemini LTI",
        2: "How to use Gemini effectively",
        3: "How to use NotebookLM effectively",
        4: "How to give good prompts"
    };

    const courseName = courseNames[id];
    const userName =
        (localStorage.getItem("firstName") || "") +
        " " +
        (localStorage.getItem("lastName") || "");

    const quizBank = {
        1: [
            {
                q: "Which of the following describes the core purpose of integrating Gemini LTI into a university's LMS for faculty use?",
                options: [
                    "To provide AI assistance for teaching and learning workflows",
                    "To automatically delete old course modules",
                    "To remove course instructors from editing permissions",
                    "To restrict access to LMS for students"
                ],
                correct: 0
            },
            {
                q: "True or False: Gemini LTI allows secure data exchange between the LMS and Google’s AI services following LTI compliance rules.",
                options: ["True", "False"],
                correct: 0
            },
            {
                q: "Which benefit does an LTI-based tool like Gemini provide to instructors?",
                options: [
                    "Automated insights, grading support and structured content creation",
                    "Unlimited cloud storage for movies",
                    "Automatic student attendance marking",
                    "Bypassing LMS authentication"
                ],
                correct: 0
            },
            {
                q: "LTI ensures that external tools like Gemini can securely connect to the LMS by enabling which type of communication?",
                options: [
                    "Standardized and encrypted tool launches",
                    "Open Wi-Fi based communication",
                    "Unrestricted data sharing across all apps",
                    "Anonymous guest access without authentication"
                ],
                correct: 0
            },
            {
                q: "True or False: Gemini LTI can help reduce faculty workload by automating repetitive tasks such as generating teaching materials.",
                options: ["True", "False"],
                correct: 0
            },
            {
                q: "Which challenge does Gemini LTI help solve in digital learning environments?",
                options: [
                    "Creating high-quality teaching content faster",
                    "Blocking LMS updates",
                    "Deleting unused assignments automatically",
                    "Restricting student submissions"
                ],
                correct: 0
            },
            {
                q: "When launching Gemini LTI inside an LMS, what information is securely passed to the tool?",
                options: [
                    "User identity and course context",
                    "User banking information",
                    "Entire university data archive",
                    "Private staff communications"
                ],
                correct: 0
            },
            {
                q: "Why is role-based access important in LTI authentication?",
                options: [
                    "To deliver different tool capabilities to students and instructors",
                    "To block instructors from all content",
                    "To prevent grading permissions",
                    "To remove admin privileges permanently"
                ],
                correct: 0
            },
            {
                q: "Which scenario best demonstrates an appropriate use of Gemini LTI in an LMS?",
                options: [
                    "Creating module summaries and question banks automatically",
                    "Reorganizing LMS database tables",
                    "Changing university-wide password policies",
                    "Blocking course visibility for enrolled students"
                ],
                correct: 0
            },
            {
                q: "True or False: LTI tools like Gemini can access course data without any security layers.",
                options: ["True", "False"],
                correct: 1
            },
            {
                q: "Which of the following is a correct explanation of LTI launch parameters?",
                options: [
                    "They provide necessary metadata for securely loading external tools in LMS",
                    "They control browser cache",
                    "They modify system-wide LMS configurations automatically",
                    "They reset user login sessions"
                ],
                correct: 0
            },
            {
                q: "What is one limitation that faculty should understand when using LTI-integrated AI tools?",
                options: [
                    "They must review AI-generated outputs for accuracy",
                    "They must disable LMS grading features",
                    "They cannot upload documents",
                    "They lose access to the LMS navigation menu"
                ],
                correct: 0
            },
            {
                q: "Which statement best describes LTI Advantage?",
                options: [
                    "An enhanced suite of security and integration features for external tools",
                    "A browser extension for LMS themes",
                    "A student-only messaging tool",
                    "A server that stores video lectures"
                ],
                correct: 0
            },
            {
                q: "True or False: LTI tools cannot access course information unless granted explicit LMS permissions.",
                options: ["True", "False"],
                correct: 0
            },
            {
                q: "What should instructors verify when first launching Gemini LTI?",
                options: [
                    "Whether the LMS correctly passes user role and course identifiers",
                    "Whether LMS themes match AI colors",
                    "Whether Wi-Fi speed is below normal",
                    "Whether students have access to unrelated documents"
                ],
                correct: 0
            },
            {
                q: "Which of the following shows an incorrect use of Gemini LTI?",
                options: [
                    "Using the AI to create inaccurate or misleading academic content without review",
                    "Generating structured lesson outlines",
                    "Summarizing long documents",
                    "Creating assessments based on course topics"
                ],
                correct: 0
            },
            {
                q: "True or False: Only instructors can launch Gemini LTI if the LMS administrator configures role-based permissions accordingly.",
                options: ["True", "False"],
                correct: 0
            },
            {
                q: "Which feature in LTI helps prevent unauthorized access to AI tools?",
                options: [
                    "OAuth 2.0 based signed requests",
                    "Open guest browsing mode",
                    "Unencrypted course links",
                    "Removing login requirements"
                ],
                correct: 0
            },
            {
                q: "Which outcome is expected after using Gemini LTI in a module?",
                options: [
                    "Improved course content creation efficiency",
                    "Automatic deletion of discussion boards",
                    "Restricted student enrollment",
                    "Disabled LMS notifications"
                ],
                correct: 0
            },
            {
                q: "True or False: Gemini LTI can assist faculty by generating drafts of rubrics, feedback, and assessments.",
                options: ["True", "False"],
                correct: 0
            }
        ],
        2: [
    {
        q: "Which statement best describes how Gemini improves teaching workflows when used effectively?",
        options: [
            "It generates structured content, summaries, and drafts based on provided context.",
            "It replaces the instructor’s responsibility for verifying academic accuracy.",
            "It automatically updates LMS gradebooks without review.",
            "It removes the need for instructors to prepare learning materials manually."
        ],
        correct: 0
    },
    {
        q: "True or False: Gemini provides more accurate responses when the instructor supplies detailed context, constraints, and examples.",
        options: ["True", "False"],
        correct: 0
    },
    {
        q: "When working with Gemini, which approach results in higher-quality outputs?",
        options: [
            "Providing step by step instructions with specific details",
            "Using very short prompts with no explanation",
            "Asking Gemini to guess the missing information",
            "Copying random content from the internet"
        ],
        correct: 0
    },
    {
        q: "Why is adding constraints, such as format, tone, or word limit, important when generating academic content using Gemini?",
        options: [
            "It guides Gemini to produce responses aligned with the instructor's requirements.",
            "It blocks Gemini from generating responses above a certain length.",
            "It prevents Gemini from using any external reasoning.",
            "It forces Gemini to output incorrect information intentionally."
        ],
        correct: 0
    },
    {
        q: "True or False: Gemini can analyze uploaded documents and produce summaries, but it requires the instructor to verify accuracy before sharing with students.",
        options: ["True", "False"],
        correct: 0
    },
    {
        q: "Which scenario demonstrates effective use of Gemini in classroom preparation?",
        options: [
            "Generating rubric drafts from learning outcomes provided by the instructor",
            "Automatically assigning student grades without instructor review",
            "Replacing all course modules with AI-generated content blindly",
            "Allowing AI to rewrite course policies without faculty approval"
        ],
        correct: 0
    },
    {
        q: "When revising AI-generated responses, which strategy improves the final output?",
        options: [
            "Iterating on Gemini’s responses by refining clarity, focus, and structure",
            "Accepting the first version without checking for accuracy",
            "Adding contradictory instructions in the same prompt",
            "Avoiding feedback loops to prevent changes in output"
        ],
        correct: 0
    },
    {
        q: "What is one limitation instructors must keep in mind when using Gemini for research-related tasks?",
        options: [
            "It may produce convincing but incorrect explanations if context is insufficient.",
            "It cannot process text longer than a single paragraph.",
            "It is unable to cite any academic sources.",
            "It cannot accept document uploads of any kind."
        ],
        correct: 0
    },
    {
        q: "True or False: Providing examples of desired output formats helps Gemini understand expectations and respond more accurately.",
        options: ["True", "False"],
        correct: 0
    },
    {
        q: "Which practice is recommended for ensuring reliable AI-generated content?",
        options: [
            "Cross-checking all AI-generated facts and data with trusted academic sources.",
            "Assuming all AI content is factually correct without review.",
            "Allowing students to use unverified AI responses in assignments.",
            "Removing citations from AI-generated text automatically."
        ],
        correct: 0
    },
    {
        q: "Which situation requires the instructor to revise or regenerate content from Gemini?",
        options: [
            "When the generated response lacks depth or contains minor inaccuracies.",
            "When the response perfectly matches course learning outcomes.",
            "When the AI provides additional helpful clarifications.",
            "When students already understand the material well."
        ],
        correct: 0
    },
    {
        q: "True or False: Gemini can generate case studies based on instructor-defined scenarios, but it cannot create assessments.",
        options: ["True", "False"],
        correct: 1
    },
    {
        q: "When using Gemini for problem-solving tasks, how should instructors guide the AI?",
        options: [
            "By specifying the reasoning method or framework they want the AI to follow.",
            "By avoiding any explanation of the expected reasoning pattern.",
            "By requesting only the final answer without any steps.",
            "By allowing Gemini to generate content unrelated to the course."
        ],
        correct: 0
    },
    {
        q: "Which of the following represents a hard-level use case for Gemini in a university setting?",
        options: [
            "Generating concept maps from complex academic theories.",
            "Creating a simple welcome message for students.",
            "Counting the number of files in LMS storage.",
            "Rewriting email templates without context."
        ],
        correct: 0
    },
    {
        q: "What is the benefit of asking Gemini to provide multiple drafts or perspectives?",
        options: [
            "It helps the instructor choose the best version or blend ideas.",
            "It forces Gemini to delete previous responses.",
            "It reduces accuracy by creating conflicting output.",
            "It prevents AI from generating structured reasoning."
        ],
        correct: 0
    },
    {
        q: "True or False: When Gemini is asked to explain its reasoning, it produces more transparent and traceable responses.",
        options: ["True", "False"],
        correct: 0
    },
    {
        q: "When prompting Gemini, what effect does specifying the target audience have?",
        options: [
            "It adjusts the complexity, tone, and style to match the intended readers.",
            "It limits Gemini to producing only numerical answers.",
            "It disables AI reasoning features.",
            "It forces all responses to be informal regardless of context."
        ],
        correct: 0
    },
    {
        q: "Which action enhances the reliability of AI-generated summaries?",
        options: [
            "Uploading source documents and clarifying the summarization goal.",
            "Asking Gemini to generate summaries without reading context.",
            "Using only the default AI prompt for all documents.",
            "Ignoring any errors found in the generated summary."
        ],
        correct: 0
    },
    {
        q: "True or False: Gemini automatically understands course-specific terminology without any definition or context.",
        options: ["True", "False"],
        correct: 1
    },
    {
        q: "Which of the following is a recommended best practice for using Gemini effectively in academic settings?",
        options: [
            "Providing structured prompts with examples, constraints, and explicit expectations.",
            "Relying solely on Gemini to design entire courses automatically.",
            "Using AI-generated content without human supervision.",
            "Avoiding multi-step instructions to reduce response time."
        ],
        correct: 0
    }
],

3: [
{
q: "Which statement best describes NotebookLM’s unique strength compared to general AI tools?",
options: [
"It generates source-grounded responses strictly based on uploaded documents.",
"It replaces the need for any academic research.",
"It automatically writes essays without reading sources.",
"It removes the requirement for citations in academic work."
],
correct: 0
},
{
q: "True or False: NotebookLM can summarize multiple uploaded documents into a single coherent explanation.",
options: ["True", "False"],
correct: 0
},
{
q: "NotebookLM improves research workflows mainly by:",
options: [
"Organizing readings, generating summaries, and creating insights from source materials.",
"Replacing the need for students to read assigned texts.",
"Automatically grading all research submissions.",
"Removing outdated LMS content."
],
correct: 0
},
{
q: "When NotebookLM generates an answer, why is it considered more reliable than a general-purpose AI model?",
options: [
"Because it grounds responses in the specific documents provided by the user.",
"Because it scans the entire internet for answers.",
"Because it can bypass citation requirements.",
"Because it stores data permanently from previous users."
],
correct: 0
},
{
q: "True or False: If a concept does not appear in the uploaded sources, NotebookLM will clearly indicate that it cannot answer with certainty.",
options: ["True", "False"],
correct: 0
},
{
q: "Which scenario demonstrates effective use of NotebookLM?",
options: [
"Generating cross-document insights for a literature review.",
"Editing LMS system configurations.",
"Replacing instructor office hours entirely.",
"Creating random content unrelated to uploaded sources."
],
correct: 0
},
{
q: "What is a major limitation of NotebookLM that instructors should understand?",
options: [
"It cannot answer questions outside of what is present in the uploaded documents.",
"It cannot read PDF files.",
"It deletes user documents automatically.",
"It cannot generate summaries of any type."
],
correct: 0
},
{
q: "True or False: NotebookLM keeps documents private and isolated per user session, improving security.",
options: ["True", "False"],
correct: 0
},
{
q: "Which approach ensures NotebookLM produces accurate summaries?",
options: [
"Uploading well-formatted documents and clarifying the summarization goal.",
"Uploading random images unrelated to the topic.",
"Adding contradictory instructions to confuse the model.",
"Limiting NotebookLM to only one type of file format."
],
correct: 0
},
{
q: "When analyzing long texts, NotebookLM performs best when:",
options: [
"Documents are broken into structured sections with clear headings.",
"All files contain unprocessed scanned handwriting.",
"Sources include irrelevant data from different fields.",
"Large files are merged without formatting."
],
correct: 0
},
{
q: "True or False: NotebookLM can generate quiz questions from the documents provided.",
options: ["True", "False"],
correct: 0
},
{
q: "What is one hard-level use case of NotebookLM?",
options: [
"Comparing multiple theories and generating a contrast table using sourced content.",
"Changing system-wide LMS policies.",
"Writing fictional stories unrelated to documents.",
"Removing citations from academic articles."
],
correct: 0
},
{
q: "Which situation requires the instructor to verify NotebookLM's output carefully?",
options: [
"When interpreting complex technical or mathematical explanations.",
"When generating a simple greeting message.",
"When downloading a PDF file.",
"When uploading a document without any text."
],
correct: 0
},
{
q: "True or False: NotebookLM can be used to design structured literature reviews grounded entirely in provided sources.",
options: ["True", "False"],
correct: 0
},
{
q: "What is one advantage of NotebookLM’s source-citations in answers?",
options: [
"They allow instructors to validate the origin of each statement.",
"They automatically rewrite the source documents.",
"They remove the need for reading the original text.",
"They enforce plagiarism intentionally."
],
correct: 0
},
{
q: "When students use NotebookLM, what responsibility must instructors emphasize?",
options: [
"Ensuring students do not treat NotebookLM as a replacement for reading.",
"Encouraging students to rely solely on the AI summary.",
"Discouraging any verification of AI-generated content.",
"Using NotebookLM to avoid academic honesty policies."
],
correct: 0
},
{
q: "Which prompt produces the most accurate output in NotebookLM?",
options: [
"Ask questions that directly relate to the content inside the uploaded documents.",
"Ask NotebookLM about unrelated global events.",
"Provide incomplete data and expect factual answers.",
"Request explanations outside the document scope."
],
correct: 0
},
{
q: "True or False: NotebookLM can compare insights across multiple documents and highlight similarities.",
options: ["True", "False"],
correct: 0
},
{
q: "Which best describes a use case for instructors?",
options: [
"Generating course reading summaries grounded in uploaded content.",
"Deleting course files automatically.",
"Resetting LMS features.",
"Generating unrelated fiction."
],
correct: 0
},
{
q: "NotebookLM is most effective when:",
options: [
"Users upload high-quality texts with clear structure and context.",
"Users provide no supporting documents.",
"Documents are entirely unrelated to the learning goal.",
"Only images are uploaded with no text."
],
correct: 0
}
],
4: [
{
q: "Which principle is essential when writing high-quality prompts for academic AI tasks?",
options: [
"Clarity, context, and constraints must be defined explicitly in the prompt.",
"Prompts should be as vague as possible to allow creative interpretation.",
"Prompts must avoid giving any examples or structure.",
"Prompts should force the AI to guess missing details."
],
correct: 0
},
{
q: "True or False: Providing examples of desired output formats improves the AI's ability to follow instructions.",
options: ["True", "False"],
correct: 0
},
{
q: "Which prompt produces the most accurate AI response for complex tasks?",
options: [
"A structured prompt containing context, task description, format, tone, and constraints.",
"A single short sentence with no explanation.",
"A prompt that intentionally includes conflicting instructions.",
"A prompt that tells the AI to ignore all constraints."
],
correct: 0
},
{
q: "Why is specifying the target audience important when constructing prompts?",
options: [
"It helps the AI adjust complexity, tone, and detail for the intended readers.",
"It reduces the AI’s reasoning ability.",
"It blocks the AI from generating academic content.",
"It forces the AI to produce only informal responses."
],
correct: 0
},
{
q: "True or False: Long prompts always lead to better results, regardless of structure.",
options: ["True", "False"],
correct: 1
},
{
q: "Which scenario represents a hard-level prompt engineering use case?",
options: [
"Designing a multi-step case study with role constraints and expected reasoning pathways.",
"Asking the AI to list three colors randomly.",
"Writing a one-word response prompt.",
"Generating a random sentence without context."
],
correct: 0
},
{
q: "Which method produces the best results when refining AI output?",
options: [
"Iterating the prompt by adding clarity, constraints, and corrections.",
"Repeating the same prompt expecting different results.",
"Removing all details from the prompt.",
"Using contradictory instructions to confuse the model."
],
correct: 0
},
{
q: "True or False: Providing role-based instructions (e.g., 'act as a professor') helps the AI adopt the appropriate perspective.",
options: ["True", "False"],
correct: 0
},
{
q: "Which instruction improves the AI's ability to produce structured academic content?",
options: [
"Specify the desired output format such as table, essay, outline, or rubric.",
"Ask the AI to decide the format automatically.",
"Give no instructions about structure.",
"Request extremely short answers regardless of context."
],
correct: 0
},
{
q: "When writing prompts, why is context important?",
options: [
"Without context, AI may produce generic or incorrect responses.",
"It makes prompts unnecessarily long.",
"It forces the AI to only copy the question.",
"It prevents the AI from using reasoning."
],
correct: 0
},
{
q: "True or False: Step-by-step reasoning prompts help the AI reach more accurate conclusions.",
options: ["True", "False"],
correct: 0
},
{
q: "Which prompt is the least effective for generating academic insights?",
options: [
"Give me something about teaching.",
"Using LTI standards, explain how AI tools integrate with LMS systems.",
"Provide a detailed summary of this research article.",
"Compare two AI models used in higher education."
],
correct: 0
},
{
q: "What is one advantage of using explicit constraints in prompts?",
options: [
"They prevent the AI from producing irrelevant or excessively long output.",
"They reduce the AI's ability to follow instructions.",
"They make responses more random.",
"They prevent the AI from completing the task."
],
correct: 0
},
{
q: "True or False: AI performs better when the instructor clarifies assumptions and expectations in the prompt.",
options: ["True", "False"],
correct: 0
},
{
q: "Which approach improves multi-step task clarity?",
options: [
"Breaking complex prompts into smaller, ordered instructions.",
"Giving all steps in one confusing sentence.",
"Removing all task descriptions.",
"Letting AI guess the task sequence."
],
correct: 0
},
{
q: "A well-structured academic prompt often contains:",
options: [
"Context, task, examples, constraints, and format expectations.",
"Only a title with no explanation.",
"Random instructions unrelated to the goal.",
"A single vague question."
],
correct: 0
},
{
q: "True or False: AI can correctly interpret vague instructions without any context or clarification.",
options: ["True", "False"],
correct: 1
},
{
q: "Which scenario demonstrates poor prompt engineering?",
options: [
"Asking the AI to generate course content without specifying topic, level, or structure.",
"Providing sample responses to help shape the output.",
"Adding format expectations such as tables or bullet points.",
"Giving clear constraints regarding tone and detail."
],
correct: 0
},
{
q: "Which prompt style is ideal for generating well-reasoned explanations?",
options: [
"Instruct the AI to explain its reasoning process and provide structured steps.",
"Ask the AI to only provide the final answer.",
"Request one-word outputs.",
"Give contradictory instructions."
],
correct: 0
},
{
q: "True or False: Better prompts lead to more reliable, accurate, and context-appropriate AI responses.",
options: ["True", "False"],
correct: 0
}
],
    }

    const questions = quizBank[id];

    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);

    const handleSelect = (choice) => {
        const a = [...answers];
        a[index] = choice;
        setAnswers(a);
    };

    const submitQuiz = () => setSubmitted(true);

    const score = answers.filter((a, i) => a === questions[i].correct).length;
    const passed = score >= Math.ceil(questions.length * 0.8);

    function saveCertificate() {
        const cert = {
            id: "cert_" + Date.now(),
            courseId: id,
            courseName: courseName,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            userName: userName
        };

        const saved = JSON.parse(localStorage.getItem("earnedCertificates")) || [];
        const exists = saved.some(c => c.courseId === id);

        if (!exists) {
            saved.push(cert);
            localStorage.setItem("earnedCertificates", JSON.stringify(saved));

            let count = parseInt(localStorage.getItem("certificates") || 0);
            count += 1;
            localStorage.setItem("certificates", count);
        }
    }

    const downloadCertificate = async () => {
        const canvas = await html2canvas(certificateRef.current);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "certificate.png";
        link.click();
    };

    return (
        <div style={styles.page}>

            <h1 style={styles.heading}>Final Quiz</h1>

            {!submitted ? (
                <div style={styles.card}>

                    {/* ⭐ Dynamic Question Number */}
                    <div style={styles.counter}>
                        {index + 1} / {questions.length}
                    </div>

                    <h2 style={styles.question}>{questions[index].q}</h2>

                    {questions[index].options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(i)}
                            style={{
                                ...styles.option,
                                background: answers[index] === i ? "#2563eb" : "#e5e7eb",
                                color: answers[index] === i ? "white" : "black"
                            }}
                        >
                            {opt}
                        </div>
                    ))}

                    <div style={{ marginTop: "25px" }}>
                        {index > 0 && (
                            <button onClick={() => setIndex(index - 1)} style={styles.btn}>
                                Previous
                            </button>
                        )}

                        {index < questions.length - 1 ? (
                            <button onClick={() => setIndex(index + 1)} style={styles.btn}>
                                Next
                            </button>
                        ) : (
                            <button onClick={submitQuiz} style={styles.btn}>
                                Submit Quiz
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div style={styles.card}>
                    <h2>Result</h2>
                    <p>Your Score: {score} / {questions.length}</p>

                    {passed ? (
                        <>
                            <h3 style={{ color: "green" }}>You passed!</h3>

                            {!showCertificate && saveCertificate()}

                            <button
                                style={styles.btn}
                                onClick={() => setShowCertificate(true)}
                            >
                                View Certificate
                            </button>

                            {showCertificate && (
                                <div style={styles.popupBackground}>
                                    <div style={styles.popupBox}>
                                        <CertificatePopup
                                            ref={certificateRef}
                                            userName={userName}
                                            courseName={courseName}
                                            date={new Date().toLocaleDateString()}
                                        />

                                        <button onClick={downloadCertificate} style={styles.btn}>
                                            Download Certificate
                                        </button>
                                        <button
                                            onClick={() => setShowCertificate(false)}
                                            style={styles.closeBtn}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <h3 style={{ color: "red" }}>You need 80 percent to pass.</h3>
                            <p>Please try again.</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

/* ⭐ All NEW UI styles */
const styles = {
    page: {
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #dde3f7, #f1e4ff, #ddf4e4, #ecfeff)"
    },

    heading: {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        fontWeight: "700"
    },

    card: {
        width: "60%",
        margin: "0 auto",
        background: "white",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.18)",
        position: "relative"
    },

    counter: {
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "18px",
        fontWeight: "700",
        color: "#333"
    },

    question: {
        marginBottom: "20px"
    },

    option: {
        padding: "12px",
        marginTop: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.2s"
    },

    btn: {
        padding: "12px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginRight: "10px",
        marginTop: "20px"
    },

    popupBackground: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    popupBox: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center"
    },

    closeBtn: {
        marginTop: "15px",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
    }
};
