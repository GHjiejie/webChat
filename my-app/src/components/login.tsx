// src/components/Login.tsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic here
    history.push("/chat");
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
