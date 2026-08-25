import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { CartItem, OrderDetails } from '../types';
import './OrderSuccessPage.css';

interface OrderData {
  orderId: string;
  items: CartItem[];
  total: number;
  form: OrderDetails;
  date: string;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lastOrder');
    if (stored) {
      setOrder(JSON.parse(stored));
      sessionStorage.removeItem('lastOrder');
    }
  }, []);

  if (!order) {
    return (
      <div className="container order-success order-success--empty">
        <h1>No Order Found</h1>
        <p>It looks like you haven't placed an order yet.</p>
        <Link to="/products" className="btn btn--primary">Start Shopping</Link>
      </div>
    );
  }

  const paymentLabels = { cod: 'Cash on Delivery', upi: 'UPI', card: 'Credit/Debit Card' };

  return (
    <div className="order-success">
      <div className="container">
        <div className="order-success__header">
          <div className="order-success__icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for choosing Marichi Healthcare. Your wellness journey begins now.</p>
        </div>

        <div className="order-success__details">
          <div className="order-card">
            <h2>Order Details</h2>
            <div className="order-meta">
              <div><span>Order ID</span><strong>{order.orderId}</strong></div>
              <div><span>Date</span><strong>{new Date(order.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}</strong></div>
              <div><span>Payment</span><strong>{paymentLabels[order.form.paymentMethod]}</strong></div>
              <div><span>Total</span><strong>{formatPrice(order.total)}</strong></div>
            </div>
          </div>

          <div className="order-card">
            <h2>Shipping To</h2>
            <address>
              {order.form.firstName} {order.form.lastName}<br />
              {order.form.address}<br />
              {order.form.city}, {order.form.state} — {order.form.pincode}<br />
              {order.form.phone}<br />
              {order.form.email}
            </address>
          </div>

          <div className="order-card order-card--full">
            <h2>Items Ordered</h2>
            <div className="order-items">
              {order.items.map(({ product, quantity }) => (
                <div key={product.id} className="order-item">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <span className="order-item__name">{product.name}</span>
                    <span className="order-item__qty">Quantity: {quantity}</span>
                  </div>
                  <span className="order-item__price">{formatPrice(product.price * quantity)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-success__actions">
          <Link to="/products" className="btn btn--primary">Continue Shopping</Link>
          <Link to="/" className="btn btn--outline">Back to Home</Link>
        </div>

        <p className="order-success__demo">This is a demo order. No real products will be shipped.</p>
      </div>
    </div>
  );
}
