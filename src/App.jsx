import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </ThemeProvider>
  );
}
