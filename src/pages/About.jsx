import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>ElectrnonicShop</strong>, where passion meets
            creativity. We bring you the finest products crafted with love and
            precision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At <strong>ElectronicShop</strong>, we aim to provide high-quality
            products that make your life easier, more stylish, and uniquely
            yours. We're here to transform your everyday experiences with
            exceptional products and outstanding service.
          </p>
        </div>
        <div className="mission-image">
          <img src="public/mission.webp" alt="Our Mission" />
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We believe in delivering only the best products that meet our high
              standards.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Creativity and innovation drive everything we do to keep you ahead
              of trends.
            </p>
          </div>
          <div className="value-card">
            <h3>Customer First</h3>
            <p>
              Your satisfaction is our priority. We listen, improve, and
              deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Be Part of Our Journey</h2>
        <p>
          Thank you for choosing <strong>ElectronicShop</strong>. We're excited
          to have you with us as we grow and evolve.
        </p>
        <button>Shop Now</button>
      </section>
    </div>
  );
};

export default About;
