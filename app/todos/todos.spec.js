import { expect } from 'chai';
import reducer from './reducer'

describe.only('reducer', () => {
    it('adds todo', () => {
        const stateBefore = Object.freeze([]);
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = Object.freeze([
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ]);

        expect(reducer(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('toggles todo', () => {
        const stateBefore = Object.freeze([
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            }
        ]);
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const stateAfter = Object.freeze([
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            }
        ]);

        expect(reducer(stateBefore, action)).to.deep.equal(stateAfter);
    });
});
