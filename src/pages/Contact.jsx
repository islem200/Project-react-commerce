import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us for assistance or
          inquiries.
        </p>
      </section>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Customer Support</h2>
          <p>For immediate support, reach us at:</p>
          <ul>
            <li>
              <strong>Email:</strong> support@ecommerce.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (800) 123-4567
            </li>
            <li>
              <strong>Hours:</strong> Mon-Fri, 9am - 6pm EST
            </li>
          </ul>

          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" className="social-icon">
              Facebook
            </a>
            <a href="#" className="social-icon">
              Instagram
            </a>
            <a href="#" className="social-icon">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
