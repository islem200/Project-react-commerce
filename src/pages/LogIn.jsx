import React, { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const LogIn = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const { token, user } = await loginUser({
        email,
        password,
      });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="signup-container">
        <h1 className="signup-title">LogIn</h1>
        <form onSubmit={handleSubmit} className="signup-form">
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
            <button className="signup-button">LogIn</button>
          </div>
          <NavLink to="/signup">Create an Account</NavLink>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
