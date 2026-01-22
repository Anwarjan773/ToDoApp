export const createTodo = (title) => ({
  id: crypto.randomUUID(),
  title: title.trim(),
  completed: false,
  createdAt: Date.now(),
});

export const isValidTodo = (title) => {
  return title.trim().length > 0;
};
