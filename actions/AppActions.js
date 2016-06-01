/**
 * Created by FlyingAnt on 12/17/15.
 */
import React from 'react';
import {createActions} from '../utils/ActionBuilder'
import CommonActions from '../common/actions/CommonActions'

module.exports = createActions({

    InitializeApp(args){
        return this.dispatchMe(args)
            .then(() => this.dispatch(CommonActions.Actions.Busy()))
            .then(() => {
                return initializeApp(args)
                    .then(() => this.dispatch(this.Actions.InitializeAppCompleted(args)))
                    .then(() => this.dispatch(CommonActions.Actions.BusyCompleted()))
            })
    }

})

function initializeApp() {
    //delay for 2 seconds
    return new Promise((resolve, reject) => {
        //_.delay(() => {
        //    resolve();
        //}, 2000);
        resolve();
    });
}