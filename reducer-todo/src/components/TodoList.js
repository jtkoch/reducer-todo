import React, { useReducer } from 'react';
import { TodoReducer, initialTodoState } from '../reducers/TodoReducer';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialTodoState);
  console.log(state);

  return (
    <div className="todo-list">
      <AddTodo dispatch={dispatch} />
      <button onClick={e => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED" })
      }}>Clear Completed</button>
      {state.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} index={i} dispatch={dispatch} />
      ))}
    </div>
  )
}

export default TodoList;