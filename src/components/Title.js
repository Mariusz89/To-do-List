import React from 'react';
import ReactDOM from 'react-dom';
import style from './Title.css';

class Title extends React.Component {
	render() {
	  return (
	    <div>
	       <div className= {style.TodoTitle}>
	          <h1>Todo</h1>
	       </div>
	    </div>
	  );
	}
}

export default Title;