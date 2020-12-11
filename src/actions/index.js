import { ADD_RECORD, DELETE_RECORD, CHANGE_STATUS, SHOW_DONE, SHOW_UNDONE } from '../constants/index';

export const addRecord = res => dispatch => ({
    type: ADD_RECORD,
    payload: res
})

export const deleteRecord = res => ({
    type: DELETE_RECORD,
    payload: res
})

export const changeStatus = res => ({
    type: CHANGE_STATUS,
    payload: res
})

export const showDone = res => ({
    type: SHOW_DONE,
    payload: res
})

export const showUndone = res => ({
    type: SHOW_UNDONE,
    payload: res
})