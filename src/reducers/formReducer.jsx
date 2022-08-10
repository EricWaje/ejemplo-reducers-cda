import { SEND } from '../actions/formActions';

export const initialState = {
    nombre: '',
    email: '',
    password: '',
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND:
            console.log(action);
            return {
                ...state,
                [action.field]: action.payload,
            };

        default:
            return state;
    }
};
