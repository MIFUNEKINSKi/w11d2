import { connect } from 'react-redux';
import todoIndex  from './todo_list';

// actions

import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


 const mapStatetoProps = state => ({
   todos: allTodos(state),
   state
 });

 const mapDispatchToProps = dispatchEvent => ({
   receiveTodo: todo => dispatchEvent(receiveTodo(todo))
 });
 
 // Think of as a native method. Every time we call this function
 // everything will be the same except for todoIndex.
 // This creates an object props, that is accessible in 
 // whatever component we throw in the function
 export default connect(
   mapStatetoProps,
   mapDispatchToProps 
)(todoIndex);