import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import httpClient from "../services/httpClient";
const Profile = ({ onLogout }) => {
  const [user, setUser] = useState({});
  
  const fetchUser = async () => {
    try {
      const response = await httpClient.get("/user/me");
      setUser(response.data);
    } catch (error) {}
  };
  
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="profile-header">
        <div className="profile-image-container">
          <img src="public/woman.jpg" alt="Profile" className="profile-image" />
          <button className="edit-profile-btn">Edit</button>
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </header>

      {/* Account Overview */}
      <section className="account-overview">
        <div className="overview-card">
          <h3>Orders</h3>
          <p>View Order History</p>
        </div>
        <div className="overview-card">
          <h3>Wishlist</h3>
          <p>Your Saved Items</p>
        </div>
        <div className="overview-card">
          <h3>Rewards</h3>
          <p>200 Points</p>
        </div>
      </section>

      {/* Personal Details */}
      <section className="personal-details">
        <h2>Personal Details</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={user.name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={user.email} />
          </div>
        </form>
      </section>

      {/* Settings */}
      <section className="settings">
        <h2>Settings</h2>
        <div className="setting-option">
          <label>Dark Mode</label>
          <input type="checkbox" />
        </div>
      </section>

      {/* Logout */}
      <button
        className="logout-btn"
        onClick={() => {
          onLogout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
