/**
 * Created by FlyingAnt on 12/17/15.
 */
import Immutable from 'immutable';
import { combineReducers } from 'redux'

import UIReducer from './UIReducer'
import StatusReducer from './StatusReducer'

let combineImmutableReducers = reducers => {
    return (state, action) => Immutable.Map(reducers(
        Immutable.Map.isMap(state) ? state.toObject() : state, action
    ));
};

//combine all your reducers here
let reducers = combineReducers({
    //add reducers here
    ui: UIReducer,
    status: StatusReducer
})

module.exports = combineImmutableReducers(reducers)