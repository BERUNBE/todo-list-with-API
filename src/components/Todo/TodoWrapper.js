import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"

export default class TodoWrapper extends Component {

  componentDidMount() {
    this.props.refreshTodos();
  }

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

  toggleTodoFilterWrapper = (boolean) => {
    if(boolean) {
      this.props.filterTodos();
    } else {
      this.props.refreshTodos();
    }
  }

  updateTodoStatusWrapper = (todo) => {
    this.props.updateTodoStatus(todo);
  }

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo} onToggleFilter={this.toggleTodoFilterWrapper}/>
        <Todos todos={this.props.todos} onChangeStatus={this.updateTodoStatusWrapper}/>
      </div>
    )
  }
}
