import React from "react";
import { useTodos } from "../context/TodoContext";

const FILTERS = ["all", "active", "completed"];

export default function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div
      role="group"
      aria-label="Todo filters"
      className="flex justify-center gap-2 mb-6"
    >
      {FILTERS.map((item) => {
        const isActive = filter === item;

        return (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
            aria-pressed={isActive}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
