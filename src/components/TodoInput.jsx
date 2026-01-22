import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoInput() {
  const { addTodo } = useTodos();

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      setError("Todo cannot be empty");
      return;
    }

    addTodo(value);
    setValue("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2 border bg-white dark:bg-gray-700 dark:text-white">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          placeholder="Add a new task..."
          aria-label="Add todo"
          className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-400"
            }`}
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg cursor-pointer
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
