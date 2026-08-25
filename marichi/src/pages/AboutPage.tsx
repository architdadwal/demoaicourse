import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="about-hero__eyebrow">Our Story</span>
          <h1>Rooted in Ayurveda,<br />Crafted for Today</h1>
          <p>
            Marichi Healthcare brings the timeless wisdom of Ayurveda to modern wellness —
            with products that are pure, effective, and sustainably made.
          </p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>The Marichi Promise</h2>
            <p>
              Named after Marichi, one of the revered Saptarishis (seven sages) who received
              the knowledge of Ayurveda directly from Lord Brahma, our brand embodies the
              spirit of ancient healing wisdom passed through generations.
            </p>
            <p>
              Every product in our range is formulated using authentic Ayurvedic texts,
              sourced from certified organic farms across India, and manufactured in
              GMP-certified facilities that meet the highest quality standards.
            </p>
            <Link to="/products" className="btn btn--primary">Explore Our Products</Link>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=500&fit=crop"
              alt="Ayurvedic herbs"
            />
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            What Sets Us Apart
          </h2>
          <div className="about-values__grid">
            <div className="about-value">
              <span>🌿</span>
              <h3>Purity First</h3>
              <p>No artificial colors, preservatives, or fillers. Just pure herbs and natural ingredients.</p>
            </div>
            <div className="about-value">
              <span>📜</span>
              <h3>Authentic Formulas</h3>
              <p>Recipes from classical Ayurvedic texts like Charaka Samhita and Sushruta Samhita.</p>
            </div>
            <div className="about-value">
              <span>🔬</span>
              <h3>Lab Tested</h3>
              <p>Every batch is tested for potency, purity, and safety before it reaches you.</p>
            </div>
            <div className="about-value">
              <span>🌍</span>
              <h3>Sustainable</h3>
              <p>Ethical sourcing, fair trade practices, and eco-friendly packaging.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Begin Your Wellness Journey</h2>
          <p>Discover products tailored to your unique constitution and health goals.</p>
          <Link to="/products" className="btn btn--accent btn--lg">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}
