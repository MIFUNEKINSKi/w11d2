import { RECEIVE_TODOS,
  RECEIVE_TODO,
  RECIEVE_TODOS
} from "../actions/todo_actions";

// The reducer takes in the previous state and an action arguement
// and will preform an action on the state
const todosReducer = (state = {}, action) => {
  // Makes sure that the object is immutable
  Object.freeze(state);
  // creates the next state. Will always start off next state as empty
  let nextState = {};

  // think of switch as a router that will perform a specific action.
  // Think of as if else
  switch(action.type) {
    case RECEIVE_TODOS:
      // It's really just checking to see if the type matches the action
      // the action in this case is recieve todos, where todos is nested in
      action.todos.forEach( todo => {
        // for each todo, we are nesting it under its id in nextstate 
        nextState[todo.id] = todo;
      });
      return nextState;
    // default is like else
    default:
      return state;
  }
}

export default todosReducer;