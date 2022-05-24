import * as actions from './actionTypes';

export const createTest = test => ({
    type: actions.CREATE_TEST,
    payload: test
});

export const createQuestion = question => ({
    type: actions.CREATE_QUESTION,
    payload: question
});



