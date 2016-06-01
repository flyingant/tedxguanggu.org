/**
 * Created by FlyingAnt on 3/14/16.
 */
import Immutable from 'immutable';
import { UPDATE_PATH } from 'redux-simple-router'

//actions
import AppActions from '../actions/AppActions'

const DEFAULT_STATUS_STATE = {
    app_initialized: false
};

function status(state, action) {
    state = state || Immutable.Map(DEFAULT_STATUS_STATE);
    switch (action.type) {
        case AppActions.Keys.InitializeAppCompleted:
            return state.merge({
                app_initialized: true
            });
        default:
            return state;
    }
}

module.exports = status;