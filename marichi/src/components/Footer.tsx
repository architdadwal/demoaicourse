import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🌿</span>
            <span>Marichi Healthcare</span>
          </div>
          <p className="footer__desc">
            Authentic Ayurvedic wellness products crafted with 5000 years of wisdom
            and modern quality standards.
          </p>
        </div>

        <div className="footer__links">
          <h4>Shop</h4>
          <Link to="/products?category=immunity">Immunity</Link>
          <Link to="/products?category=digestion">Digestion</Link>
          <Link to="/products?category=skin-hair">Skin & Hair</Link>
          <Link to="/products?category=wellness">Wellness</Link>
        </div>

        <div className="footer__links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <a href="#quality">Quality Promise</a>
          <a href="#shipping">Shipping Info</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__links">
          <h4>Connect</h4>
          <a href="mailto:hello@marichihealthcare.com">hello@marichihealthcare.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <p className="footer__address">Bengaluru, Karnataka, India</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Marichi Healthcare. All rights reserved.</p>
        <p className="footer__note">Demo store — no real transactions processed.</p>
      </div>
    </footer>
  );
}
