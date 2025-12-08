// import React, { useState } from "react";
// import axios from "axios";

// export default function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [uricId, setUricId] = useState("");
//     const [error, setError] = useState("");

//     const ADMIN_URIC_IDS = ["ADM-UNI-2025", "ADM-12345", "ADM-001"];

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const response = await axios.post("http://localhost:8081/api/auth/login", {
//                 email,
//                 password
//             });

//             const token = response.data.token;
//             const role = response.data.role;
//             const storedAdminId = response.data.adminCode;

//             // Faculty login check
//             if (role === "FACULTY") {
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "FACULTY");
//                 window.location.href = "/dashboard";
//                 return;
//             }

//             // Admin login check
//             if (role === "ADMIN") {
//                 if (!ADMIN_URIC_IDS.includes(uricId.trim())) {
//                     setError("Admin URIC ID is incorrect");
//                     return;
//                 }

//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "ADMIN");
//                 window.location.href = "/admin";
//                 return;
//             }

//             setError("Invalid account role");

//         } catch (err) {
//             setError("Login failed");
//         }
//     };

//     return (
//         <div style={styles.page}>
//             <div style={styles.card}>
//                 <h1 style={styles.heading}>Login</h1>

//                 {error && <div style={styles.error}>{error}</div>}

//                 <form style={styles.form} onSubmit={handleLogin}>
//                     <input type="email" placeholder="Email"
//                            value={email} onChange={e => setEmail(e.target.value)}
//                            style={styles.input} required />

//                     <input type="password" placeholder="Password"
//                            value={password} onChange={e => setPassword(e.target.value)}
//                            style={styles.input} required />

//                     <input type="text" placeholder="Admin URIC ID (Only for Administrators)"
//                            value={uricId} onChange={e => setUricId(e.target.value)}
//                            style={styles.input} />

//                     <button type="submit" style={styles.button}>Sign In</button>
//                 </form>

//                 <p style={styles.text}>
//                     No account? <a href="/register" style={styles.link}>Register</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     page: { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#eaf0ff" },
//     card: { width: "360px", background: "white", padding: "35px", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" },
//     heading: { textAlign: "center", marginBottom: "25px" },
//     form: { display: "flex", flexDirection: "column" },
//     input: { padding: "14px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" },
//     button: { padding: "14px", background: "#2563eb", borderRadius: "8px", color: "white", border: "none", cursor: "pointer" },
//     error: { background: "#ffdddd", color: "red", padding: "10px", borderRadius: "5px", marginBottom: "15px", textAlign: "center" },
//     link: { color: "#2563eb", textDecoration: "none" },
//     text: { textAlign: "center", marginTop: "15px" }
// };
//Updated code with roles
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";
import "./ForgotPassword"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminCode, setAdminCode] = useState("");
    const [role, setRole] = useState("FACULTY");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8081/api/auth/login", {
                email,
                password,
                role
            });

            const token = response.data.token;
            const userRole = response.data.role;

            if (userRole === "ADMIN") {
                if (!ADMIN_CODES.includes(adminCode.trim())) {
                    setError("Invalid Admin Unique ID");
                    return;
                }
                localStorage.setItem("token", token);
                localStorage.setItem("role", "ADMIN");
                window.location.href = "/admin";
                return;
            }

            if (userRole === "FACULTY") {
                localStorage.setItem("token", token);
                localStorage.setItem("role", "FACULTY");
                localStorage.setItem("email", email);


                localStorage.setItem("firstName", response.data.firstName);
                localStorage.setItem("lastName", response.data.lastName);
                window.location.href = "/dashboard";
                return;
            }
        } catch (err) {
            setError("Login failed");
        }
    };

    return (
        <div className="login-page">

            {/* Top bar */}
            <div className="top-bar">
                <h2 className="top-left">Silverleaf University</h2>
                <button className="home-btn" onClick={() => window.location.href = "/"}>Home</button>
            </div>

            {/* Center wrapper */}
            <div className="center-wrapper">
                <h1 className="main-title">Gemini Faculty Companion</h1>

                <div className="login-card">
                    <h2 className="card-title">Login</h2>

                    {error && <div className="error-box">{error}</div>}

                    <form onSubmit={handleLogin}>

                        <select className="input-box" value={role} onChange={e => setRole(e.target.value)}>
                            <option value="FACULTY">Faculty</option>
                            <option value="ADMIN">Admin</option>
                        </select>

                        {role === "ADMIN" && (
                            <input
                                className="input-box"
                                placeholder="Admin Unique ID"
                                value={adminCode}
                                onChange={e => setAdminCode(e.target.value)}
                            />
                        )}

                        <input
                            className="input-box"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            className="input-box"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="submit-btn" type="submit">Sign In</button>
                    </form>

                    <p className="login-text">
                        No account? <a href="/register" className="register-link">Register</a>
                    </p>
                    <p style={{ marginTop: "10px", textAlign: "center" }}>
  <span 
    style={{ color: "#2563eb", cursor: "pointer" }}
    onClick={() => navigate("/forgot-password")}
  >
    Forgot Password?
  </span>
</p>

                </div>
            </div>
        </div>
    );
}



//updated based on backend

// import React, { useState } from "react";
// import axios from "axios";

// function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const res = await axios.post("http://localhost:8081/api/auth/login", {
//                 email,
//                 password
//             });

//             if (res.data === "Invalid email or password") {
//                 setError("Invalid credentials");
//                 return;
//             }

//             localStorage.setItem("token", res.data.token);
//             localStorage.setItem("role", res.data.role);
//             localStorage.setItem("userId", res.data.userId);

//             if (res.data.role === "ADMIN") {
//                 window.location.href = "/admin-dashboard";
//             } else {
//                 window.location.href = "/dashboard";
//             }

//         } catch (err) {
//             setError("Network or server error");
//         }
//     };

//     return (
//         <div style={styles.container}>

//             <h1 style={styles.title}>Login</h1>

//             {error && <div style={styles.error}>{error}</div>}

//             <form style={styles.form} onSubmit={handleLogin}>

//                 <input
//                     type="email"
//                     placeholder="Email"
//                     style={styles.input}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     style={styles.input}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button type="submit" style={styles.button}>Login</button>
//             </form>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         width: "350px",
//         margin: "120px auto",
//         background: "#f4f4f4",
//         padding: "30px",
//         borderRadius: "10px"
//     },
//     title: { textAlign: "center", marginBottom: "20px" },
//     form: { display: "flex", flexDirection: "column" },
//     input: {
//         padding: "12px",
//         margin: "8px 0",
//         borderRadius: "5px",
//         border: "1px solid #bbb"
//     },
//     button: {
//         padding: "12px",
//         background: "#2563eb",
//         color: "white",
//         border: "none",
//         borderRadius: "6px",
//         cursor: "pointer",
//         marginTop: "15px"
//     },
//     error: {
//         background: "#ffdddd",
//         padding: "10px",
//         color: "red",
//         borderRadius: "5px",
//         marginBottom: "10px"
//     }
// };

// export default Login;
