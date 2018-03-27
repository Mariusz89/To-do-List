import React from 'react';
import ReactDOM from 'react-dom';
import style from './TodoForm.css';

const TodoForm = ({addTodo}) => {
  let input;
  return (
    <form className={style.TodoForm} onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

export default TodoForm;


