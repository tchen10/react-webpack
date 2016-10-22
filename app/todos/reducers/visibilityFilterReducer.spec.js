import { expect } from 'chai';
import visibilityFilter from './visibilityFilterReducer';

describe('visibilityFilter', () => {
    it('has SHOW_ALL default state', () => {
        const stateBefore = Object.freeze(undefined);
        const action = { type: 'NOT_VALID_ACTION' };
        const stateAfter = Object.freeze('SHOW_ALL');

        expect(visibilityFilter(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('sets visibility filter', () => {
        const stateBefore = Object.freeze('');
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        };
        const stateAfter = Object.freeze('SHOW_COMPLETED');

        expect(visibilityFilter(stateBefore, action)).to.deep.equal(stateAfter);
    });
});
