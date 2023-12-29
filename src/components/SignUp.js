// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
import { useUserAuth } from "./UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
