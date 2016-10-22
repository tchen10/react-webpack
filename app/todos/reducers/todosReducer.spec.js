import { expect } from 'chai';
import todos from './todosReducer';

describe('todos', () => {
    it('has default state with empty array', () => {
        const stateBefore = Object.freeze(undefined);
        const action = { type: 'NOT_VALID_ACTION' };
        const stateAfter = Object.freeze([]);

        expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('adds todo', () => {
        const stateBefore = Object.freeze([]);
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = Object.freeze([{
                id: 0,
                text: 'Learn Redux',
                completed: false
            }]);

        expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('toggles todo', () => {
        const stateBefore = Object.freeze([{
                id: 0,
                text: 'Learn Redux',
                completed: false
            }, {
                id: 1,
                text: 'Go shopping',
                completed: false
            }]);
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const stateAfter = Object.freeze([{
                id: 0,
                text: 'Learn Redux',
                completed: false
            }, {
                id: 1,
                text: 'Go shopping',
                completed: true
            }]);

        expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
    });
});
