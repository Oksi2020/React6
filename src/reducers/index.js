import { ADD_RECORD, DELETE_RECORD, CHANGE_STATUS, SHOW_DONE, SHOW_UNDONE } from '../constants/index';

const initState={
    recordsList:[]
}

const reducer=(state=initState, action )=>{
    switch( action.type ){
        case ADD_RECORD: 
            return ({
                ...state,
                recordsList: [...state.recordsList, { done: false, title: action.payload}]
            })
        case CHANGE_STATUS: 
            let newArray = state.recordsList.map(item=>{
                if(item.title===action.payload) {
                    item.done = true;
                    return item; 
                }
                return item;
            })
            return ({
                ...state,
                recordsList: newArray
            })
        case DELETE_RECORD: 
            return ({
                ...state,
                recordsList: state.recordsList.filter(item=>!(item.title===action.payload))
            })
        default: 
            return state;
    }
}

export default reducer;