import React, { useState, useRef, useEffect } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text); // ← use text

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  const handleToggle = () => toggleTodo(todo.id);
  const handleDelete = () => deleteTodo(todo.id);
  const handleSave = () => {
    if (!value.trim()) return;
    updateTodo(todo.id, value);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setValue(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li
      className="flex items-center justify-between gap-3 p-4 rounded-lg shadow-sm transition hover:shadow-md
                 bg-white dark:bg-gray-700 border dark:border-gray-600"
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          aria-label="Toggle todo"
          className="h-5 w-5 cursor-pointer"
        />

        {isEditing ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-600 dark:text-white dark:border-gray-600"
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-400 dark:text-gray-400" : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {todo.text} {/* ← use text */}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600 hover:text-green-800">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600 hover:text-blue-800">
            Edit
          </button>
        )}

        <button onClick={handleDelete} className="text-red-600 hover:text-red-800" aria-label="Delete todo">
          Delete
        </button>
      </div>
    </li>
  );
}
