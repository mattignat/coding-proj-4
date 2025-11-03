'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return <div className="text-center py-4 text-gray-600">Loading products…</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-600">Error: {error}</div>;
  }

  if (isEmpty) {
    return <div className="text-center py-4 text-gray-600">No products match your filters.</div>;
  }

  return null;
}