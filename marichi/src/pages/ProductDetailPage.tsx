import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug, formatPrice, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container product-not-found">
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn--primary">Back to Shop</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail__main">
          <div className="product-detail__gallery">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="product-detail__badge">{product.badge}</span>}
          </div>

          <div className="product-detail__info">
            <span className="product-detail__category">{product.category.replace('-', ' & ')}</span>
            <h1>{product.name}</h1>

            <div className="product-detail__rating">
              <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
              <span>{product.rating} out of 5</span>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>

            <div className="product-detail__price">
              <span className="price-current">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="price-original">{formatPrice(product.originalPrice)}</span>
                  <span className="price-discount">Save {discount}%</span>
                </>
              )}
            </div>

            <p className="product-detail__desc">{product.longDescription}</p>

            <div className="product-detail__benefits">
              <h3>Key Benefits</h3>
              <ul>
                {product.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="product-detail__ingredients">
              <h3>Ingredients</h3>
              <div className="ingredient-tags">
                {product.ingredients.map((i) => (
                  <span key={i} className="ingredient-tag">{i}</span>
                ))}
              </div>
            </div>

            <div className="product-detail__actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn btn--primary btn--lg" onClick={handleAddToCart} disabled={!product.inStock}>
                {added ? '✓ Added!' : 'Add to Cart'}
              </button>
              <button className="btn btn--accent btn--lg" onClick={handleBuyNow} disabled={!product.inStock}>
                Buy Now
              </button>
            </div>

            {!product.inStock && (
              <p className="out-of-stock-notice">This product is currently out of stock.</p>
            )}

            <div className="product-detail__assurance">
              <div><span>🚚</span> Free delivery on orders ₹999+</div>
              <div><span>↩️</span> 7-day easy returns</div>
              <div><span>✓</span> 100% authentic products</div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="related-products">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
