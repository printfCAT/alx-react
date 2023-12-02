import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = new Map([]);

export const courseReducer = (state = initialState, action = {type: null}) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedFetchCourseSuccess = coursesNormalizer(action.data);
            return state.merge(normalizedFetchCourseSuccess.map(item => Map({ ...item, isSelected: false })));

        case SELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], true);

        case UNSELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], false);

        default: return state
    }
}
