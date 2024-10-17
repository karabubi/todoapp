//   fetch("http://localhost:3000/users", {
//  headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name }),
//  })
//   .then((res) => res.json())
//   .then((data) => {
//   localStorage.setItem("user", JSON.stringify(data));
//    onLogin(data);
//  })
//   .catch((err) => console.error("Login error:", err));
// return (
//  <div>
//  <input
//   type="text"
//   placeholder="Enter your name"
//    value={name}
//   onChange={(e) => setName(e.target.value)}
//   required
//   />
//   <button type="submit">Login</button>
//  </form>
//  </div>
//   );
//   }

//   export default Login;
//-----------------------------------------
// Import React hooks for managing state and effects
// Login.jsx
import { useState, useEffect } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      //login
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        onLogin(data);
      })
      .catch((err) => console.error("Login error:", err));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={name} onChange={(e) => setName(e.target.value)} required>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// This is the default export for the Login component
export default Login;
