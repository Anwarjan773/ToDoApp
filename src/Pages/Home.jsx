import React from "react";
import TodoInput from "../components/TodoInput";
import TodoFilters from "../components/TodoFilters";
import TodoList from "../components/TodoList";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors">
      <section className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
        <header className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white"></h1>
            <p className="text-gray-500 dark:text-gray-400"></p>
          </div>

        
          <button
            onClick={toggleTheme}
            className="
         
    flex items-center gap-2
  
    px-4 py-2 rounded-lg
    bg-gray-200 dark:bg-gray-800
    text-gray-800 dark:text-gray-200
    hover:scale-105
    active:scale-95
    transition-transform duration-300
       cursor-pointer
  "
          >
            <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
            <span className="hidden sm:block">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>
        </header>

        <TodoInput />
        <TodoFilters />
        <TodoList />
      </section>
    </main>
  );
}
