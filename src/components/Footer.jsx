import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-info">
            <h4>Contact Us</h4>
            <p>Email: support@yourshop.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="footer-payments">
            <h4>We Accept</h4>
            <img src="public/visa.png" alt="Visa" />
            <img src="public/card.png" alt="Mastercard" />
            <img src="public/paypal.png" alt="PayPal" />
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
