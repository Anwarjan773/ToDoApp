import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

export default function TodoList() {
  const { todos, filter } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  if (!filteredTodos.length) return <EmptyState />;

  return (
    <ul role="list" aria-label="Todo list" className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
