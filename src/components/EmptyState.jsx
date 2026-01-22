import React from "react";

export default function EmptyState() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="text-5xl mb-4">📝</div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">No todos yet</h3>

      <p className="text-gray-500 max-w-sm">
        Add your first task above to start staying productive.
      </p>
    </div>
  );
}
