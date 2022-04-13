import React from 'react';
import todosReducer from '../../reducers/todos_reducer';
import TodoListItem from './todo_list_items';
import TodoForm from './todo_form';

// This is the index of all the todos. We get props from state.
const todoIndex = (props) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {
          props.todos.map(todo => (<TodoListItem todo={todo} key={todo.id}/>))
          // Todos is in our props. We iterate over each todo, rendering it as part of the TodoListItem
          // Calling the component automatically renders it. We put carrots around it because its a component
          // We could've done this manually but wanted to do it dynamically
        }
      </ul>
        <TodoForm/>
    </div>
  )
};

export default todoIndex;