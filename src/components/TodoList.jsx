import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

export default function TodoList() {
  const { todos } = useTodos();

  // Empty state
  if (!todos.length) {
    return <EmptyState />;
  }

  return (
    <ul role="list" aria-label="Todo list" className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
