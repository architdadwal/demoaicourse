import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

export default function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 4);
  const bestsellers = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <div className="hero__text">
            <span className="hero__eyebrow">Ancient Wisdom, Modern Wellness</span>
            <h1 className="hero__title">
              Heal Naturally with <em>Ayurveda</em>
            </h1>
            <p className="hero__subtitle">
              Discover premium Ayurvedic products crafted from pure herbs,
              time-tested formulas, and sustainable sourcing — for your complete wellbeing.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary">Shop All Products</Link>
              <Link to="/about" className="btn btn--outline">Our Story</Link>
            </div>
            <div className="hero__trust">
              <div className="hero__trust-item">
                <span className="hero__trust-icon">✓</span>
                <span>100% Natural</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-icon">✓</span>
                <span>GMP Certified</span>
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-icon">✓</span>
                <span>Free Shipping ₹999+</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-main">
              <img
                src="https://images.unsplash.com/photo-1608571428402-944624113d1d?w=500&h=600&fit=crop"
                alt="Ayurvedic herbs and products"
              />
            </div>
            <div className="hero__floating-card">
              <span className="hero__floating-icon">🌿</span>
              <div>
                <strong>12 Products</strong>
                <span>Pure Ayurvedic Range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories section">
        <div className="container">
          <h2 className="section__title">Shop by Category</h2>
          <div className="categories__grid">
            {[
              { id: 'immunity', name: 'Immunity', icon: '🛡️', desc: 'Strengthen your natural defenses' },
              { id: 'digestion', name: 'Digestion', icon: '🍃', desc: 'Gentle gut health support' },
              { id: 'skin-hair', name: 'Skin & Hair', icon: '✨', desc: 'Natural beauty from within' },
              { id: 'wellness', name: 'Daily Wellness', icon: '☀️', desc: 'Everyday vitality boosters' },
              { id: 'herbal-teas', name: 'Herbal Teas', icon: '🍵', desc: 'Soothing botanical blends' },
            ].map((cat) => (
              <Link key={cat.id} to={`/products?category=${cat.id}`} className="category-card">
                <span className="category-card__icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Featured Products</h2>
            <Link to="/products" className="section__link">View All →</Link>
          </div>
          <div className="products-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container promo__inner">
          <div className="promo__content">
            <span className="promo__tag">Limited Offer</span>
            <h2>Flat 20% Off on First Order</h2>
            <p>Use code <strong>WELCOME20</strong> at checkout. Valid on orders above ₹499.</p>
            <Link to="/products" className="btn btn--accent">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="bestsellers section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Customer Favorites</h2>
            <Link to="/products" className="section__link">View All →</Link>
          </div>
          <div className="products-grid">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container values__grid">
          <div className="value-card">
            <span className="value-card__icon">🌱</span>
            <h3>Pure & Natural</h3>
            <p>Every ingredient is sourced from certified organic farms and tested for purity.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon">⚗️</span>
            <h3>Traditional Formulas</h3>
            <p>Recipes passed down through generations, validated by modern science.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon">♻️</span>
            <h3>Sustainable</h3>
            <p>Eco-friendly packaging and ethical sourcing that respects nature.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
