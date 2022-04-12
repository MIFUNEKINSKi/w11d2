export const RECIEVE_TODOS = "RECEIVE_TODOS";
export const RECIEVE_TODO = "RECEIVE_TODOS";

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


