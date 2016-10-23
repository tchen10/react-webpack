import React, { Component } from 'react';
import store from './store';


const FilterLink = ({
    filter,
    children
}) => {
    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            });
        }}>
            {children}
        </a>
    );
};

const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL' :
            return todos;
        case 'SHOW_ACTIVE' :
            return todos.filter(
                    t => !t.completed
                );
        case 'SHOW_COMPLETED' :
            return todos.filter(
                    t => t.completed
                );
    }
};

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

    toggleTodo(id) {
        return () => { store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
        })};
    }

    constructor(props, context) {
        super(props, context);
        this.addTodo = this.addTodo.bind(this)
    }

    render() {
        const visibleTodos = getVisibileTodos(this.props.todos, this.props.visibilityFilter)
        return (
            <div>
                <input ref={ node => {
                    this.input = node;
                }} />
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id} onClick={this.toggleTodo(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {''} <FilterLink filter='SHOW_ALL'>All</FilterLink>
                    {''} <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
                    {''} <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
                </p>
            </div>
        );
    }
}

export default TodoApp
