'use client';

export default function PriceFilter({ value, onChange, min = 0, max = 2000 }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">
        Max Price: ${value}
      </label>
      <input
        type="range"
        id="price-range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </div>
  );
}