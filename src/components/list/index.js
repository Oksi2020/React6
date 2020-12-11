import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { List } from './list'
import { SortedList } from './sortedList';

const convertedList = () => {
    return(
        <>
            <Switch>
                <Route exact path = '/list' component = {List} />
                <Route exact path = '/sorted-list' component = {SortedList} />
            </Switch>
        </>
    )
}


export default convertedList;