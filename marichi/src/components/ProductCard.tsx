import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        {discount > 0 && <span className="product-card__discount">-{discount}%</span>}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category.replace('-', ' & ')}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__rating">
          <span className="product-card__stars">{'★'.repeat(Math.round(product.rating))}</span>
          <span className="product-card__rating-text">{product.rating} ({product.reviewCount})</span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price">
            <span className="product-card__price-current">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="product-card__price-original">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button className="product-card__btn" onClick={handleAddToCart} disabled={!product.inStock}>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Link>
  );
}
