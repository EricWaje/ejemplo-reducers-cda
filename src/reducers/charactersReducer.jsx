import { SET_CHARACTERS, SET_ERROR } from '../actions/charactersActions';

export const initialState = {
    data: [],
    loading: true,
    error: false,
};

export const charactersReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            console.log(action);
            return {
                ...state,
                data: action.payload,
                loading: false,
            };

        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};
