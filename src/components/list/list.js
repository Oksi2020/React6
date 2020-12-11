import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_RECORD, DELETE_RECORD, CHANGE_STATUS, SHOW_DONE, SHOW_UNDONE } from '../../constants/index';
import { addRecord } from '../../actions/index';
import './list.css'

export const List = () => {
    const recordsList = useSelector(state => state.recordsList);
    const dispatch = useDispatch();
    const [ value, setValue ]=useState('')

    const changeValue = (e) =>{
        const newValue = e.target.value;
        setValue(newValue);
    }

    const changeStatus = (e) => {
        if(e.target.tagName==='LI') {
            dispatch( {type: CHANGE_STATUS, payload: e.target.id} )
        }       
    }

    const record = (e) => {
        if(e.code === 'Enter') {
            setValue('');
            dispatch( {type: ADD_RECORD, payload: value} )
        }
    }
    const deleteRecord = (e) => {
        dispatch( {type: DELETE_RECORD, payload: e.target.id} )
    }

    return(
        <div>
            <input 
                onKeyDown={record}
                value={ value }
                onChange={ changeValue }
            ></input>
            <ul>
                {
                    recordsList.map(item=> {
                        return(
                            <li key={item.title}
                                id = {item.title}
                                className = {item.done?'done':'undone'}
                                onClick = { changeStatus }
                            >
                                {item.title}
                                <button id = {item.title} type = 'button' onClick = {deleteRecord}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}