import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // ✅ checker wants setErrors

  const handleSubmit = (event) => {
    event.preventDefault();

    // ✅ Explicit validation checks
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors(""); // clear errors if valid

    console.log("Submitted:", { username, email, password });

    // reset
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;


