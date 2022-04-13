import React from "react";
import { uniqueId } from "./id_generator";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // creating the object
    const todo = Object.assign({}, this.state, { id: uniqueId()} );
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input type="text" 
            className="input"
            // ref="title" what is this doing
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}
            // What is required doing
            required/>
        </label>
      </form>
    )
  }
}

export default TodoForm