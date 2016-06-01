/**
 * Created by FlyingAnt on 3/23/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../less/main.less'
import cn from 'classnames';

//component
import Navigator from '../components/navigator/Navigator'

class NewsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigator current={"news"}/>
            </div>
        )
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(NewsContainer);