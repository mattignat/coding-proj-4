export async function GET() {
  // Simulate some loading time for realistic experience
  await new Promise(resolve => setTimeout(resolve, 300));

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      stock: 15,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 599.99,
      stock: 8,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
      description: "Latest smartphone with advanced camera features"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Clothing",
      price: 129.99,
      stock: 12,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
      description: "Comfortable running shoes for daily exercise"
    },
    {
      id: 4,
      name: "Coffee Maker",
      category: "Home & Garden",
      price: 79.99,
      stock: 6,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
      description: "Programmable coffee maker with thermal carafe"
    },
    {
      id: 5,
      name: "Laptop",
      category: "Electronics",
      price: 899.99,
      stock: 4,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
      description: "High-performance laptop for work and gaming"
    },
    {
      id: 6,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 24.99,
      stock: 20,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
      description: "Comfortable 100% cotton t-shirt"
    },
    {
      id: 7,
      name: "Garden Tools Set",
      category: "Home & Garden",
      price: 49.99,
      stock: 10,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      description: "Essential garden tools for home gardening"
    },
    {
      id: 8,
      name: "Tablet",
      category: "Electronics",
      price: 329.99,
      stock: 7,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
      description: "Lightweight tablet perfect for reading and entertainment"
    },
    {
      id: 9,
      name: "Jeans",
      category: "Clothing",
      price: 69.99,
      stock: 0,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop",
      description: "Classic blue denim jeans"
    },
    {
      id: 10,
      name: "Plant Pot",
      category: "Home & Garden",
      price: 19.99,
      stock: 25,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=200&fit=crop",
      description: "Ceramic plant pot for indoor plants"
    }
  ];

  return Response.json(products);
}