export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  // takes in multiple todo objects
  // returns them back with a new property type, which we 
    //can use for routing purposes
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});



