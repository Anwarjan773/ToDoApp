import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem("todos");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  const [filter, setFilter] = useState("all"); // ← Add filter state

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

  const updateTodo = (id, newText) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        updateTodo,
        filter, // ← expose filter
        setFilter, // ← expose setFilter
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
