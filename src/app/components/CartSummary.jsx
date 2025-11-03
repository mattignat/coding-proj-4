'use client';

export default function CartSummary({ cart, products, onDecrement, onReset }) {
  // Compute itemCount and total using product prices
  const itemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  if (itemCount === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-gray-600">Cart — No items yet.</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Cart</h3>
      
      <div className="space-y-2 mb-4">
        {Object.entries(cart).map(([id, qty]) => {
          const product = products.find(p => p.id === parseInt(id));
          if (!product) return null;
          
          return (
            <div key={id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex-1">
                <div className="text-sm font-medium">{product.name}</div>
                <div className="text-sm text-gray-600">Qty: {qty} × ${product.price.toFixed(2)}</div>
              </div>
              <button
                onClick={() => onDecrement(parseInt(id))}
                className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
              >
                −1
              </button>
            </div>
          );
        })}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-lg font-bold text-green-600">
            ${total.toFixed(2)}
          </span>
        </div>
        
        <button 
          onClick={onReset}
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
        >
          Reset Cart
        </button>
      </div>
    </div>
  );
}