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
        todos: payload
      };

    case "SET_FILTER":
      return {
        ...state,
        isOnlyActive: payload
      };

    case "UPDATE_TODO_STATUS":
        const updatedTodoList = state.todos.map(todoItem => {
          if (todoItem.id === payload.id) {
            return { id: payload.id, 
                      status: payload.status,
                      content: todoItem.content };
          } else {
            return todoItem;
          }
        });
        return {
          todos: updatedTodoList
        }
    default:
      return state
  }
}
