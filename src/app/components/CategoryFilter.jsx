'use client';

export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
        Category
      </label>
      <select
        id="category-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}