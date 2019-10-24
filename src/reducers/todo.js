const initialState = {
  todos: [],
  isOnlyActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case "REFRESH_TODOS":
      return {
        ...state,
        todos: payload,
        isOnlyActive: false
      };

    case "SET_FILTER":
      const filteredTodoList = state.todos.filter(todoItem => todoItem.status === 'active');
      return {
        ...state,
        todos: filteredTodoList, 
        isOnlyActive: true
      };
      
    case "UPDATE_TODO_STATUS":
        const updatedTodoList = state.todos.map(todoItem => {
          if (todoItem.id === payload.id) {
            return { id: payload.id, 
                      content: todoItem.content,
                      status: payload.status };
          } else {
            return todoItem;
          }
        });
        return {
          todos: updatedTodoList
        };

    default:
      return state;
  }
}
