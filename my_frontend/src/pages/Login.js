
// import axios from "axios";
// import { useState} from "react";
// import { useNavigate } from "react-router-dom";

// import "../styles/Login.css";
// import "./ForgotPassword"

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [adminCode, setAdminCode] = useState("");
//     const [role, setRole] = useState("FACULTY");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const response = await axios.post("http://localhost:8081/api/auth/login", {
//                 email,
//                 password,
//                 role
//             });

//             const token = response.data.token;
//             const userRole = response.data.role;

//             if (userRole === "ADMIN") {
//                 if (!ADMIN_CODES.includes(adminCode.trim())) {
//                     setError("Invalid Admin Unique ID");
//                     return;
//                 }
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "ADMIN");
//                 window.location.href = "/admin";
//                 return;
//             }

//             if (userRole === "FACULTY") {
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "FACULTY");
//                 localStorage.setItem("email", email);


//                 localStorage.setItem("firstName", response.data.firstName);
//                 localStorage.setItem("lastName", response.data.lastName);
//                 window.location.href = "/dashboard";
//                 return;
//             }
//         } catch (err) {
//             setError("Login failed");
//         }
//     };

//     return (
//         <div className="login-page">

//             {/* Top bar */}
//             <div className="top-bar">
//                 <h2 className="top-left">Silverleaf University</h2>
//                 <button className="home-btn" onClick={() => window.location.href = "/"}>Home</button>
//             </div>

//             {/* Center wrapper */}
//             <div className="center-wrapper">
//                 <h1 className="main-title">Gemini Faculty Companion</h1>

//                 <div className="login-card">
//                     <h2 className="card-title">Login</h2>

//                     {error && <div className="error-box">{error}</div>}

//                     <form onSubmit={handleLogin}>

//                         <select className="input-box" value={role} onChange={e => setRole(e.target.value)}>
//                             <option value="FACULTY">Faculty</option>
//                             <option value="ADMIN">Admin</option>
//                         </select>

//                         {role === "ADMIN" && (
//                             <input
//                                 className="input-box"
//                                 placeholder="Admin Unique ID"
//                                 value={adminCode}
//                                 onChange={e => setAdminCode(e.target.value)}
//                             />
//                         )}

//                         <input
//                             className="input-box"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />

//                         <input
//                             className="input-box"
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                         />

//                         <button className="submit-btn" type="submit">Sign In</button>
//                     </form>

//                     <p className="login-text">
//                         No account? <a href="/register" className="register-link">Register</a>
//                     </p>
//                     <p style={{ marginTop: "10px", textAlign: "center" }}>
//   <span 
//     style={{ color: "#2563eb", cursor: "pointer" }}
//     onClick={() => navigate("/forgot-password")}
//   >
//     Forgot Password?
//   </span>
// </p>

//                 </div>
//             </div>
//         </div>
//     );
// }



// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "../styles/Login.css";
// import "./ForgotPassword";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [adminCode, setAdminCode] = useState("");
//     const [role, setRole] = useState("FACULTY");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const response = await axios.post("http://localhost:8081/api/auth/login", {
//                 email,
//                 password,
//                 role,
//                 adminCode    // ✅ IMPORTANT: send adminCode to backend
//             });

//             const token = response.data.token;
//             const userRole = response.data.role;

//             if (userRole === "ADMIN") {
//                 if (!ADMIN_CODES.includes(adminCode.trim())) {
//                     setError("Invalid Admin Unique ID");
//                     return;
//                 }

//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "ADMIN");
//                 localStorage.setItem("email", response.data.email);
//                 localStorage.setItem("firstName", response.data.firstName);
//                 localStorage.setItem("lastName", response.data.lastName);

//                 window.location.href = "/admin";
//                 return;
//             }

//             if (userRole === "FACULTY") {
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("role", "FACULTY");
//                 localStorage.setItem("email", response.data.email);
//                 localStorage.setItem("firstName", response.data.firstName);
//                 localStorage.setItem("lastName", response.data.lastName);

//                 window.location.href = "/dashboard";
//                 return;
//             }

//         } catch (err) {
//             setError(err.response?.data?.error || "Login failed");
//         }
//     };

//     return (
//         <div className="login-page">
//             {/* Top bar */}
//             <div className="top-bar">
//                 <h2 className="top-left">Silverleaf University</h2>
//                 <button className="home-btn" onClick={() => window.location.href = "/"}>Home</button>
//             </div>

//             {/* Center wrapper */}
//             <div className="center-wrapper">
//                 <h1 className="main-title">Gemini Faculty Companion</h1>

//                 <div className="login-card">
//                     <h2 className="card-title">Login</h2>

//                     {error && <div className="error-box">{error}</div>}

//                     <form onSubmit={handleLogin}>
//                         <select className="input-box" value={role} onChange={e => setRole(e.target.value)}>
//                             <option value="FACULTY">Faculty</option>
//                             <option value="ADMIN">Admin</option>
//                         </select>

//                         {role === "ADMIN" && (
//                             <input
//                                 className="input-box"
//                                 placeholder="Admin Unique ID"
//                                 value={adminCode}
//                                 onChange={e => setAdminCode(e.target.value)}
//                             />
//                         )}

//                         <input
//                             className="input-box"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />

//                         <input
//                             className="input-box"
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                         />

//                         <button className="submit-btn" type="submit">Sign In</button>
//                     </form>

//                     <p className="login-text">
//                         No account? <a href="/register" className="register-link">Register</a>
//                     </p>

//                     <p style={{ marginTop: "10px", textAlign: "center" }}>
//                         <span
//                             style={{ color: "#2563eb", cursor: "pointer" }}
//                             onClick={() => navigate("/forgot-password")}
//                         >
//                             Forgot Password?
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

//u[dated for vercel]
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import "./ForgotPassword";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminCode, setAdminCode] = useState("");
    const [role, setRole] = useState("FACULTY");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

    // Hardcoded demo users (frontend only)
    const facultyUser = {
        email: "maria.weber@silverleaf.edu",
        password: "maria",
        firstName: "Maria",
        lastName: "Weber",
        role: "FACULTY",
        token: "FAKE_FACULTY_TOKEN"
    };

    const adminUser = {
        email: "Tatiana.Cardona@silverleaf.edu",
        password: "tatiana",
        adminCode: "ADM-001",
        firstName: "Tatiana",
        lastName: "Cardona",
        role: "ADMIN",
        token: "FAKE_ADMIN_TOKEN"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        // ADMIN LOGIN
        if (role === "ADMIN") {
            if (email === adminUser.email &&
                password === adminUser.password &&
                adminCode === adminUser.adminCode) 
            {
                // Save required data exactly as before
                localStorage.setItem("token", adminUser.token);
                localStorage.setItem("role", "ADMIN");
                localStorage.setItem("email", adminUser.email);
                localStorage.setItem("firstName", adminUser.firstName);
                localStorage.setItem("lastName", adminUser.lastName);

                window.location.href = "/admin";
                return;
            }

            setError("Invalid admin login credentials");
            return;
        }

        // FACULTY LOGIN
        if (role === "FACULTY") {
            if (email === facultyUser.email && password === facultyUser.password) {
                localStorage.setItem("token", facultyUser.token);
                localStorage.setItem("role", "FACULTY");
                localStorage.setItem("email", facultyUser.email);
                localStorage.setItem("firstName", facultyUser.firstName);
                localStorage.setItem("lastName", facultyUser.lastName);

                window.location.href = "/dashboard";
                return;
            }

            setError("Invalid faculty login");
            return;
        }
    };

    return (
        <div className="login-page">
            <div className="top-bar">
                <h2 className="top-left">Silverleaf University</h2>
                <button className="home-btn" onClick={() => window.location.href = "/"}>Home</button>
            </div>

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

                        <input className="input-box" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input className="input-box" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

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
