import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './CartPage.css';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const shipping = subtotal >= 999 ? 0 : 79;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container cart-empty">
          <span className="cart-empty__icon">🛒</span>
          <h1>Your Cart is Empty</h1>
          <p>Discover our range of Ayurvedic wellness products.</p>
          <Link to="/products" className="btn btn--primary btn--lg">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Shopping Cart ({totalItems} items)</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item">
                <Link to={`/products/${product.slug}`} className="cart-item__image">
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="cart-item__details">
                  <Link to={`/products/${product.slug}`} className="cart-item__name">
                    {product.name}
                  </Link>
                  <span className="cart-item__category">{product.category.replace('-', ' & ')}</span>
                  <button className="cart-item__remove" onClick={() => removeItem(product.id)}>
                    Remove
                  </button>
                </div>

                <div className="cart-item__quantity">
                  <button onClick={() => updateQuantity(product.id, quantity - 1)}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                </div>

                <div className="cart-item__price">
                  {formatPrice(product.price * quantity)}
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary__row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
            </div>
            {subtotal < 999 && (
              <p className="cart-summary__shipping-note">
                Add {formatPrice(999 - subtotal)} more for free shipping!
              </p>
            )}

            <div className="cart-summary__divider" />

            <div className="cart-summary__row cart-summary__total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <div className="cart-summary__promo">
              <input type="text" placeholder="Promo code (try WELCOME20)" />
              <button className="btn btn--outline btn--sm">Apply</button>
            </div>

            <Link to="/checkout" className="btn btn--primary btn--lg btn--full">
              Proceed to Checkout
            </Link>

            <Link to="/products" className="cart-summary__continue">
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
