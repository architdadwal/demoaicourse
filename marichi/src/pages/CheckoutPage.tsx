import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import { OrderDetails } from '../types';
import './CheckoutPage.css';

const emptyForm: OrderDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  paymentMethod: 'cod',
};

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<OrderDetails>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof OrderDetails, string>>>({});

  const shipping = subtotal >= 999 ? 0 : 79;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container checkout-empty">
        <h1>Nothing to Checkout</h1>
        <p>Your cart is empty. Add some products first!</p>
        <Link to="/products" className="btn btn--primary">Go Shopping</Link>
      </div>
    );
  }

  const update = (field: keyof OrderDetails, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof OrderDetails, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = '10-digit phone required';
    if (!form.address.trim()) newErrors.address = 'Required';
    if (!form.city.trim()) newErrors.city = 'Required';
    if (!form.state.trim()) newErrors.state = 'Required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) newErrors.pincode = '6-digit pincode required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderId = 'MH' + Date.now().toString(36).toUpperCase();
    sessionStorage.setItem('lastOrder', JSON.stringify({
      orderId,
      items,
      total,
      form,
      date: new Date().toISOString(),
    }));
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="checkout-page__title">Checkout</h1>

        <form onSubmit={handleSubmit} className="checkout-layout">
          <div className="checkout-form">
            <section className="checkout-section">
              <h2>Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
                  {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
                  {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="10-digit mobile" />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>
            </section>

            <section className="checkout-section">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <label>Address</label>
                <input value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="House no, Street, Area" />
                {errors.address && <span className="form-error">{errors.address}</span>}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input value={form.city} onChange={(e) => update('city', e.target.value)} />
                  {errors.city && <span className="form-error">{errors.city}</span>}
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input value={form.state} onChange={(e) => update('state', e.target.value)} />
                  {errors.state && <span className="form-error">{errors.state}</span>}
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input value={form.pincode} onChange={(e) => update('pincode', e.target.value)} />
                  {errors.pincode && <span className="form-error">{errors.pincode}</span>}
                </div>
              </div>
            </section>

            <section className="checkout-section">
              <h2>Payment Method</h2>
              <div className="payment-options">
                {[
                  { id: 'cod' as const, label: 'Cash on Delivery', desc: 'Pay when you receive' },
                  { id: 'upi' as const, label: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
                  { id: 'card' as const, label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                ].map((opt) => (
                  <label key={opt.id} className={`payment-option ${form.paymentMethod === opt.id ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={opt.id}
                      checked={form.paymentMethod === opt.id}
                      onChange={() => update('paymentMethod', opt.id)}
                    />
                    <div>
                      <strong>{opt.label}</strong>
                      <span>{opt.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
              <p className="demo-notice">This is a demo store — no real payment will be processed.</p>
            </section>
          </div>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="checkout-items">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="checkout-item">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <span className="checkout-item__name">{product.name}</span>
                    <span className="checkout-item__qty">Qty: {quantity}</span>
                  </div>
                  <span className="checkout-item__price">{formatPrice(product.price * quantity)}</span>
                </div>
              ))}
            </div>

            <div className="checkout-summary__row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="checkout-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
            </div>
            <div className="checkout-summary__divider" />
            <div className="checkout-summary__row checkout-summary__total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--full">
              Place Order
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
