import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TodoApp from './todos';

describe('<TodoApp />', () => {
    describe('default elements', () => {
        let props;
        let wrapper;

        beforeEach(() => {
            props = {todos: []};
            wrapper = shallow(<TodoApp {...props}/>);
        });

        it('has an input field', () => {
            expect(wrapper.find('input')).to.have.length(1);
        });

        it('has a button', ()  => {
            expect(wrapper.find('button')).to.have.length(1);
            expect(wrapper.find('button').text()).to.equal('Add Todo');
        });

        it('has a unordered list', () => {
            expect(wrapper.find('ul')).to.have.length(1);
        })
    });

    describe('todo list', () => {
        it('has no list elements when there are no todos', () => {
            let props = {todos: []};
            const wrapper = shallow(<TodoApp {...props}/>);
            expect(wrapper.find('li')).to.have.length(0);
        });

        it('adds list element for each todo', () => {
            let props = {todos: [
                {id: 1, text: 'A todo'},
                {id: 2, text: 'Two todos'}
            ]};
            const wrapper = shallow(<TodoApp {...props}/>);
            expect(wrapper.find('li')).to.have.length(2);
        });
    });

    describe('add todo', () => {
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
});

