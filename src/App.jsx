// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import CartFooter from './components/CartFooter';

// 1. Importa sectionTitles junto con products
import { products, sectionTitles } from './data/products';
import { fetchBcvRate } from './data/bcv';

// 2. DEFINE LA VARIABLE 'CATEGORIES' AQUÍ (esto es lo que falta):
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  ...Object.keys(sectionTitles || {}).map((key) => ({
    id: key,
    label: sectionTitles[key],
  })),
];

// 3. Tu componente App
export default function App() {
  // ... rest of App code

  const [cart, setCart] = useState([]);
  const [bcvRate, setBcvRate] = useState(0);
  const [activeCat, setActiveCat] = useState('todos');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchBcvRate().then((rate) => setBcvRate(rate));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleClearCart = () => setCart([]);

  return (
  <div className="min-h-screen bg-[#FDF8F5] text-ink pb-28 max-w-md mx-auto shadow-2xl relative">
    <Header />
    <SearchBar value={query} onChange={setQuery} />
    <Filters 
      categories={CATEGORIES} 
      active={activeCat} 
      onChange={setActiveCat} 
    />
    <ProductGrid 
      products={products} 
      activeCat={activeCat} 
      query={query} 
      onAdd={handleAddToCart} 
    />
    <CartFooter 
      cart={cart} 
      bcvRate={bcvRate} 
      onClear={handleClearCart} 
    />
  </div>
);
}
