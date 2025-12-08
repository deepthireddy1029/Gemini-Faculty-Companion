// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function AdminRoute({ children }) {

//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token) return <Navigate to="/" />;
//     if (role !== "ADMIN") return <Navigate to="/dashboard" />;

//     return children;
// }

import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
        return <Navigate to="/" />;
    }

    return children;
}

