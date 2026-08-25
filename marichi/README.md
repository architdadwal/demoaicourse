# Marichi Healthcare — E-Commerce Demo

A React-based e-commerce storefront for **Marichi Healthcare**, an Ayurvedic health and wellness products company. This is a fully functional frontend demo with mock data — no backend required.

## Features

- **Home page** — Hero, category navigation, featured products, promotional banner
- **Product catalog** — Browse 12 Ayurvedic products with category filters, search, and sorting
- **Product detail** — Full product info, benefits, ingredients, quantity selector, add to cart
- **Shopping cart** — Persistent cart (localStorage), quantity controls, order summary
- **Checkout** — Shipping form with validation, payment method selection (demo)
- **Order confirmation** — Success page with order details
- **About page** — Brand story and values

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router v6
- CSS (no external UI library — custom Ayurvedic-themed design)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Demo Notes

- Cart persists in `localStorage` across page refreshes
- Checkout simulates order placement — no real payments processed
- Product images sourced from Unsplash
- Promo code hint: `WELCOME20` (display only, not applied in demo)

## Project Structure

```
src/
├── components/     Header, Footer, ProductCard
├── context/        CartContext (cart state management)
├── data/           Mock product catalog
├── pages/          Home, Products, Detail, Cart, Checkout, etc.
├── types/          TypeScript interfaces
└── index.css       Global styles & design tokens
```

## Future Backend Integration

When you're ready to add a backend, replace mock data in `src/data/products.ts` with API calls, and wire checkout to a real payment/order service.
