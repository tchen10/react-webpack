import { expect } from 'chai';
import reducer from './reducer';

describe('reducer', () => {
    describe('todos', () => {
        it('has default state with empty array', () => {
            const stateBefore = Object.freeze({});
            const action = { type: 'NOT_VALID_ACTION'};
            const stateAfter = Object.freeze({ todos: [] });

            expect(reducer(stateBefore, action).todos).to.deep.equal(stateAfter.todos);
        });

        it('adds todo', () => {
            const stateBefore = Object.freeze({ todos: [] });
            const action = {
                type: 'ADD_TODO',
                id: 0,
                text: 'Learn Redux'
            };
            const stateAfter = Object.freeze({
                todos: [{
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                }]
            });

            expect(reducer(stateBefore, action).todos).to.deep.equal(stateAfter.todos);
        });

        it('toggles todo', () => {
            const stateBefore = Object.freeze({
                todos: [{
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                }, {
                    id: 1,
                    text: 'Go shopping',
                    completed: false
                }]
            });
            const action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            const stateAfter = Object.freeze({
                todos: [{
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                }, {
                    id: 1,
                    text: 'Go shopping',
                    completed: true
                }]
            });

            expect(reducer(stateBefore, action).todos).to.deep.equal(stateAfter.todos);
        });
    });

    describe('visibilityFilter', () => {
        it('has SHOW_ALL default state', () => {
            const stateBefore = Object.freeze({});
            const action = { type: 'NOT_VALID_ACTION'};
            const stateAfter = Object.freeze({ visibilityFilter: 'SHOW_ALL' });

            expect(reducer(stateBefore, action).visibilityFilter).to.deep.equal(stateAfter.visibilityFilter);
        });

        it('sets visibility filter', () => {
            const stateBefore = Object.freeze({ visibilityFilter: '' });
            const action = {
                type: 'SET_VISIBILITY_FILTER',
                filter: 'SHOW_COMPLETED'
            };
            const stateAfter = Object.freeze({ visibilityFilter: 'SHOW_COMPLETED' });

            expect(reducer(stateBefore, action).visibilityFilter).to.deep.equal(stateAfter.visibilityFilter);
        });
    });
});
