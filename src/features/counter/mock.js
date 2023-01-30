export const increment = (counter) => {
  return { counter: Number(counter) + 1 };
};

export const decrement = (counter) => {
  return { counter: Number(counter) - 1 };
};
