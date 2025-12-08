import React from "react";

export default function AdminUserManagement() {

    const users = Array.from({ length: 50 }, (_, i) => ({
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 10 === 0 ? "ADMIN" : "FACULTY"
    }));

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>User Management</h1>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, i) => (
                        <tr key={i}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    table: {
        width: "100%",
        background: "white",
        borderCollapse: "collapse",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }
};
