import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TodoApp from './todos';
import TodoList from './todoList';
import AddTodo from './addTodo';

describe('<TodoApp />', () => {
    describe('presentational elements', () => {
        let props;
        let wrapper;

        beforeEach(() => {
            props = {todos: []};
            wrapper = shallow(<TodoApp {...props}/>);
        });

        it('has an AddTodo component', ()  => {
            expect(wrapper.find(AddTodo)).to.have.length(1);
        });

        it('has a TodoList component', () => {
            expect(wrapper.find(TodoList)).to.have.length(1);
        })
    });

    describe.skip('add todo', () => {
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.sandbox.create();
            // sinon.spy(TodoApp.prototype, 'addTodo');
        });

        afterEach(() => {
            sandbox.restore();
            // TodoApp.prototype.addTodo.restore();
        });

        it('simulates click events', () => {
            let props = {todos: []};
            sandbox.spy(TodoApp.prototype, 'addTodo');
            const wrapper = mount(<TodoApp {...props}/>);

            wrapper.find('button').simulate('click');
            expect(TodoApp.prototype.addTodo).to.have.property('callCount', 1);
        });
    });

    describe.skip('toggle todo', () => {

        it('calls toggle todo when clicked', () => {
            let props = {todos: [{ id: 1, text: 'ta da'}]};
            sinon.spy(TodoApp.prototype, 'toggleTodo');
            const wrapper = mount(<TodoApp {...props}/>);

            wrapper.find('li').first().simulate('click');
            expect(TodoApp.prototype.toggleTodo).to.have.property('callCount', 1);
            TodoApp.prototype.toggleTodo.restore();
        });

        // test for toggline appearance
    });
});

