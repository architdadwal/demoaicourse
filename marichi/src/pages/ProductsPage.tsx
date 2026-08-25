import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  const filtered = useMemo(() => {
    let result = getProductsByCategory(activeCategory);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...result].sort((a, b) => b.rating - a.rating);
      default:
        return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, [activeCategory, search, sortBy]);

  const setCategory = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="products-page">
      <div className="products-page__header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium Ayurvedic wellness for every need</p>
        </div>
      </div>

      <div className="container products-page__layout">
        <aside className="products-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={activeCategory === cat.id ? 'category-list__btn active' : 'category-list__btn'}
                  onClick={() => setCategory(cat.id)}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                  <span className="category-list__count">
                    {cat.id === 'all' ? products.length : getProductsByCategory(cat.id).length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="products-main">
          <div className="products-toolbar">
            <div className="products-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <p className="products-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>

          {filtered.length === 0 ? (
            <div className="products-empty">
              <span>🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
