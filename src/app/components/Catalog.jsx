'use client';

import { useState, useEffect, useMemo } from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [cart, setCart] = useState({});

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Simulate stock changes: every 5s decrement stock of a random product if stock > 0
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setProducts(prevProducts => {
        const productsWithStock = prevProducts.filter(p => p.stock > 0);
        if (productsWithStock.length === 0) return prevProducts;
        
        const randomProduct = productsWithStock[Math.floor(Math.random() * productsWithStock.length)];
        
        return prevProducts.map(product =>
          product.id === randomProduct.id
            ? { ...product, stock: product.stock - 1 }
            : product
        );
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Derive categories from products (All + unique categories)
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))].sort();
    return ['All', ...uniqueCategories];
  }, [products]);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [products, selectedCategory, maxPrice]);

  // addToCart(id) decrements stock and increments cart quantity
  const addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (!product || product.stock <= 0) return;

    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  // decrementFromCart(id) decrements cart quantity and puts one item back into stock
  const decrementFromCart = (id) => {
    if (!cart[id] || cart[id] <= 0) return;

    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === id ? { ...p, stock: p.stock + 1 } : p
      )
    );

    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[id] === 1) {
        delete newCart[id]; // remove key at 0
      } else {
        newCart[id] = newCart[id] - 1;
      }
      return newCart;
    });
  };

  // resetCart() restores all items to stock and clears the cart
  const resetCart = () => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        const cartQuantity = cart[product.id] || 0;
        return {
          ...product,
          stock: product.stock + cartQuantity
        };
      })
    );
    setCart({});
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (newMaxPrice) => {
    setMaxPrice(newMaxPrice);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mini Storefront</h1>
          <p className="text-gray-600">Browse our collection of products and add them to your cart</p>
        </header>

        {/* Top grid with CategoryFilter, PriceFilter, and CartSummary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <CategoryFilter
            categories={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
          <PriceFilter
            value={maxPrice}
            onChange={handlePriceChange}
          />
          <CartSummary
            cart={cart}
            products={products}
            onDecrement={decrementFromCart}
            onReset={resetCart}
          />
        </div>

        {/* StatusMessage */}
        <div className="mb-6">
          <StatusMessage
            loading={loading}
            error={error}
            isEmpty={!loading && !error && filteredProducts.length === 0}
          />
        </div>

        {/* ProductList */}
        {!loading && !error && (
          <ProductList
            products={filteredProducts}
            onAdd={addToCart}
          />
        )}
      </div>
    </div>
  );
}