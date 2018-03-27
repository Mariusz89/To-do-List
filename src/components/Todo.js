import React from 'react';
import ReactDOM from 'react-dom';
import style from './Todo.css';

const Todo = ({todo, remove}) => {
  return (<a href="#" onClick={() => {remove(todo.id)}}><li className={style.Todo}>{todo.text}</li></a>);
}

export default Todo;