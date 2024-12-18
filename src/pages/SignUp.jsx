import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import httpClient from "../services/httpClient";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await registerUser({
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="register">
      <div className="signup-container">
        <h1 className="signup-title">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <button className="signup-button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
