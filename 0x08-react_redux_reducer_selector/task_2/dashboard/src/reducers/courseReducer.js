import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

export const initialState = Map({
    isSelected: false
});

export const reducer = (state = initialState, action = {type: null}) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.set('isSelected', false);

        case SELECT_COURSE:
            return state.set('isSelected', true);

        case UNSELECT_COURSE:
            return state.set('isSelected', false);

        default: return state
    }
}
