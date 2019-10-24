import React, {Component} from 'react'

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  toggleFilter = (e) => {
    this.props.onToggleFilter(e.target.checked);
  }

  render() {
    return (
      <div className="todo-input" >
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.dispatch}>add</button>
        <input type="checkbox" value="Show only active" onChange={this.toggleFilter}></input><label>Show only active</label>
      </div>
    )
  }
}
