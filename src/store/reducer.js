import * as actions from './actionTypes';

const initialState = {
    testList: [],
    questionsList: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_TEST:
            return {
                ...state,
                testList: [...state.testList, action.payload]
            };


        case actions.UPDATE_TEST:
            return {
                ...state,
                testList: [...state.questions, action.payload]
            };

        case actions.CREATE_QUESTION:
            return {
                ...state,
                questionsList: [...state.questions, action.payload]
            };

        case actions.UPDATE_QUESTION:
            return {
                ...state,
                questionsList: [...state.questions, action.payload]
            };

        default:
            return state;
    }
}