import { RECEIVE_TODOS,
  RECEIVE_TODO
} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

// The reducer takes in the previous state and an action arguement
// and will preform an action on the state
const todosReducer = (state = initialState, action) => {
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
    case RECIEVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    // default is like else
    default:
      return state;
  }
};

export default todosReducer;