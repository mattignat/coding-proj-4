# React + Next.js Mini-Storefront

A fully functional e-commerce storefront built with React, Next.js App Router, Tailwind CSS v4, and modern JavaScript practices.

## Features

- 🛍️ **Product Catalog** - Browse products with filtering capabilities
- 🔍 **Smart Filtering** - Filter by category and price range
- 🛒 **Shopping Cart** - Add/remove items with real-time stock management
- 📱 **Responsive Design** - Works on all screen sizes
- ⚡ **Real-time Updates** - Stock levels change automatically
- 🎨 **Modern UI** - Built with Tailwind CSS v4
- 🔄 **Loading States** - Proper loading, error, and empty states

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Linting**: ESLint

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  app/
    page.jsx                 # Main page (server component)
    layout.js               # App layout
    globals.css             # Global styles with Tailwind imports
    api/
      products/route.js     # API endpoint for products
    components/
      Catalog.jsx           # Main client component (orchestrates everything)
      ProductList.jsx       # Displays product grid
      ProductCard.jsx       # Individual product display
      CategoryFilter.jsx    # Category selection dropdown
      PriceFilter.jsx       # Price range slider
      CartSummary.jsx       # Cart display and management
      StatusMessage.jsx     # Loading/error/empty states
```

## Requirements Compliance Checklist

### ✅ Project Setup & Structure (Points: 10)
- [x] **Next.js App Router** - Using Next.js 16 with App Router structure
- [x] **JavaScript (No TypeScript)** - All files use .js/.jsx extensions
- [x] **Tailwind CSS v4** - Configured with `@import "tailwindcss"` in globals.css
- [x] **ESLint** - Configured with Next.js recommended rules
- [x] **Component Structure** - Organized components in `src/app/components/`
- [x] **API Routes** - Products API at `/api/products` using App Router conventions

### ✅ Components + JSX + Keys (Points: 15)
- [x] **7 Client Components** - All components start with `'use client'`
  - Catalog.jsx (main orchestrator)
  - ProductList.jsx (product grid)
  - ProductCard.jsx (individual product)
  - CategoryFilter.jsx (category dropdown)
  - PriceFilter.jsx (price slider)
  - CartSummary.jsx (cart management)
  - StatusMessage.jsx (status display)
- [x] **Proper JSX Structure** - Semantic HTML with React patterns
- [x] **Unique Keys** - `key={product.id}` in ProductList mapping
- [x] **Component Composition** - Components properly nested and reused
- [x] **Props Interface** - Clean prop passing between components

### ✅ Props + Lifting State (Points: 20)
- [x] **State Lifting** - All state managed in Catalog component and passed down
- [x] **Props Flow** - Data flows from Catalog → child components
- [x] **Event Handlers** - Functions passed as props for user interactions
- [x] **Prop Types** - Consistent prop interfaces across components
- [x] **State Management** - Products, cart, filters, loading states lifted to Catalog
- [x] **Communication** - Child components communicate via callback props

### ✅ State + Controlled Inputs (Points: 15)
- [x] **React State Hooks** - `useState` for products, cart, category, maxPrice, loading, error
- [x] **Controlled Components** - CategoryFilter dropdown and PriceFilter slider
- [x] **Form Controls** - `<select>` and `<input type="range">` controlled by state
- [x] **State Updates** - Proper state setters with functional updates
- [x] **Input Validation** - Range slider with min/max bounds
- [x] **Immediate Feedback** - UI updates immediately on input changes

### ✅ Effects + Cleanup (Points: 15)
- [x] **Data Fetching** - `useEffect` to fetch products from API on mount
- [x] **Side Effects** - Stock simulation with `setInterval`
- [x] **Cleanup Functions** - `clearInterval` in useEffect return function
- [x] **Dependency Arrays** - Proper dependency management
- [x] **Effect Separation** - Separate effects for fetching and stock simulation
- [x] **Memory Leaks Prevention** - Interval cleanup on component unmount

### ✅ UX + Conditional Rendering (Points: 25)
- [x] **Loading States** - "Loading products…" while fetching
- [x] **Error Handling** - "Error: {message}" for failed requests  
- [x] **Empty States** - "No products match your filters" when no results
- [x] **Stock Indicators** - "Out of stock" vs "In stock: {count}"
- [x] **Disabled States** - Add to Cart button disabled when out of stock
- [x] **Cart States** - "Cart — No items yet" vs populated cart
- [x] **Real-time Updates** - Stock changes every 5 seconds
- [x] **Responsive Design** - Grid layout adapts to screen size
- [x] **Interactive Feedback** - Hover states and transitions
- [x] **Status Messages** - Clear feedback for all application states

## Key Features Implementation

### Real-time Stock Management
- Stock decrements automatically every 5 seconds for random products
- Adding to cart decrements stock, removing items restores stock
- Out-of-stock products show appropriate messaging and disabled buttons

### Smart Filtering System
- **Category Filter**: Dropdown with "All" + unique product categories
- **Price Filter**: Range slider with real-time price updates
- Filters work together to show matching products

### Shopping Cart Functionality
- Cart stores product IDs and quantities as object: `{[id]: qty}`
- Decrement buttons reduce quantity and restore stock
- Reset button clears cart and restores all items to stock
- Real-time total calculation based on current prices

### Professional UI/UX
- Modern card-based design with Tailwind CSS v4
- Loading spinners and error states for better user experience
- Responsive grid layout that works on all devices
- Smooth transitions and hover effects

## Copilot Reflection

**How I used GitHub Copilot:**
I used GitHub Copilot to implement a comprehensive inventory chart feature for my React + Next.js mini-storefront. Copilot assisted with generating the complete InventoryChart component using Recharts, including proper responsive container setup, tooltip configurations, and Tailwind CSS styling. It also helped create the `getStockByCategory` helper function to transform my existing product data into chart-ready format, and guided me through integrating the chart into the existing Catalog component while maintaining the proper data flow and state management patterns.

**A Copilot suggestion I changed or rejected:**
Initially, Copilot suggested using hard-coded sample data in the chart component for testing purposes, but I rejected this approach because the assignment specifically required using real data from the app state. Instead, I ensured the chart received live data through props that automatically updates when stock levels change, either through user interactions (adding items to cart) or the simulated stock decrements that occur every 5 seconds. This decision made the chart truly dynamic and meaningful rather than just decorative.

**Where Copilot saved me time:**
Copilot significantly saved me time by generating the complete Recharts configuration with proper axis labels, tooltips, and responsive design patterns that would have taken considerable research to implement manually. The suggestion to use `useMemo` for the chart data calculation was particularly valuable, as it ensured optimal performance by only recalculating when the products array changes, preventing unnecessary re-renders while maintaining real-time updates as stock levels fluctuate throughout the application.



#   m i n i - s t o r e f r o n t - f i n a l - r e a c t - n a t i v e  
 