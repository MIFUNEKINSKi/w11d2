import React from "react";


  class TodoListItem extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <li> Title: {this.props.todo.title} Body: {this.props.todo.body} Done: {this.props.todo.done.toString()}</li>
      
      )
    }
  }

export default TodoListItem;