import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import TodoList from './todoList';
import Todo from './todo';

describe('<TodoList />', () => {
    it('has no list elements when there are no todos', () => {
        let props = {todos: []};
        const wrapper = shallow(<TodoList {...props}/>);
        expect(wrapper.find(Todo)).to.have.length(0);
    });

    it('adds list element for each todo', () => {
        let props = {
            todos: [
                {id: 1, text: 'A todo'},
                {id: 2, text: 'Two todos'}
            ],
            onTodoClick: () => {}
        };
        const wrapper = shallow(<TodoList {...props}/>);
        expect(wrapper.find(Todo)).to.have.length(2);
    });
});
