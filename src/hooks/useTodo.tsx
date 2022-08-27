import React, { useReducer } from "react";

interface ITodo {
  id: string | number;
  value: string;
}

const initialState: { todos: ITodo[] } = {
  todos: [],
};

const todoReducer = (
  state: typeof initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, { id: Date.now(), value: action.payload }],
      };
    case "delete": {
      return {
        todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addItem = (title: string) => {
    dispatch({ type: "add", payload: title });
  };

  const deleteItem = (id: string | number) => {
    dispatch({ type: "delete", payload: id });
  };
  return { todos: state.todos, addItem, deleteItem };
};

export default useTodo;
