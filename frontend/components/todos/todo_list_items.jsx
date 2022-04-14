import React from "react";


  class TodoListItem extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
    //  debugger

      return (
        <div>
        <li> Title: {this.props.todo.title} Body: {this.props.todo.body} Done: {this.props.todo.done.toString()}</li>
          <button
            onClick={ this.props.removeTodo(this.props.todo.id) }>Delete</button>
        </div>
      )
    }
  }

export default TodoListItem;