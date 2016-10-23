import React, { Component } from 'react';
import store from './store';

import TodoList from './todoList.jsx';
import AddTodo from './addTodo.jsx';


const FilterLink = ({
    filter,
    currentFilter,
    children
}) => {
    if (filter === currentFilter ) {
        return <span>{children}</span>
    }
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
    addTodo(text) {
        store.dispatch({
            type: 'ADD_TODO',
            text: text,
            id: nextTodoId++
        });
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
        const {
            // destructure todos and vf from props so we can access them directly
            todos,
            visibilityFilter
        } = this.props;
        const visibleTodos = getVisibileTodos(todos, visibilityFilter)
        return (
            <div>
                <AddTodo onAddClick={text => this.addTodo(text)} />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => this.toggleTodo(id)}
                />
                <p>
                    Show:
                    {''} <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
                    {''} <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
                    {''} <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Completed</FilterLink>
                </p>
            </div>
        );
    }
}

export default TodoApp
