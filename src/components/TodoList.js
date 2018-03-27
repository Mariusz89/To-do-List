import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = ({todos, remove}) => {
  const todoNode = todos.map((todo) => {
    return (<ul><Todo todo={todo} key={todo.id} remove={remove}/></ul>)
  });
  return (<div className={style.TodoList}>{todoNode}</div>);
}

export default TodoList;