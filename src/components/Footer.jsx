import React from 'react'

const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: contact@example.com</p>
      <p>Phone: +123-456-7890</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul class="social-icons">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Grocery Store. All Rights Reserved.</p>
  </div>
</footer>
  )
}

export default Footer