import React, { Component } from 'react';
import store from './store';

let nextTodoId = 0;

class TodoApp extends Component {

    addTodo(input) {
        store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
        });
        this.input.value = '';
    }

    constructor(props, context) {
        super(props, context);
        this.addTodo = this.addTodo.bind(this)
    }

    render() {
        return (
            <div>
                <input ref={ node => {
                    this.input = node;
                }} />
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TodoApp
