'use client';

export default function ProductCard({ product, onAdd }) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
      
      <div className="text-xl font-bold text-green-600 mb-2">
        ${product.price.toFixed(2)}
      </div>
      
      <div className="mb-4">
        {isOutOfStock ? (
          <span className="text-red-600 font-medium">Out of stock</span>
        ) : (
          <span className="text-green-600">In stock: {product.stock}</span>
        )}
      </div>
      
      <button
        onClick={onAdd}
        disabled={isOutOfStock}
        className={`w-full py-2 px-4 rounded-md font-semibold transition-colors duration-200 ${
          isOutOfStock
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
}