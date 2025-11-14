import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Always successful if user enters something
    if (user.trim() !== "" && pass.trim() !== "") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Please enter username and password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "260px",
        margin: "100px auto",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">Login</button>

      {/* Message shown here */}
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
    </form>
  );
}
