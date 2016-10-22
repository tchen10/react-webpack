import { combineReducers } from 'redux';
import todos from './reducers/todosReducer';
import visibilityFilter from './reducers/visibilityFilterReducer';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer;
