import React from 'react';
import {createActions} from '../utils/ActionBuilder'
const { pushPath } = require('redux-simple-router');

module.exports = createActions({

    RedirectPath(path){
        return this.dispatch(pushPath(path))
    }
})