import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <Title />
                <div>
                    <TodoForm addTodo={this.addTodo.bind(this)}/>
                </div>
                <TodoList 
                    todos={this.state.data}
                    remove={this.removeTodo.bind(this)}
                />
            </div>
        );
    }
}

export default App;

