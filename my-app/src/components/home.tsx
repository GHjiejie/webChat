// src/components/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Chat App</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
