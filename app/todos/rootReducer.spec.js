import { expect } from 'chai';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
    it('combines todo Reducer', () => {
        const action = {};
        const state = {
            todos: {}
        }
        expect(rootReducer(state, action).todos).to.deep.equal({});
    });

    it('combines visibilityFilter Reducer', () => {
        const action = {};
        const state = {
            visibilityFilter: {}
        }
        expect(rootReducer(state, action).visibilityFilter).to.deep.equal({});
    });
});
