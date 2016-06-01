/**
 * Created by FlyingAnt on 12/17/15.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../less/main.less'

//actions
import AppActions from '../actions/AppActions'

//components
import BusySpinner from '../common/components/BusySpinner'

class App extends React.Component {

    initializeApp() {
        //redirect to home
        //this.props.dispatch(RouteActions.Actions.RedirectPath('/home'))
    }

    componentDidMount() {
        this.initializeApp();
    }

    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
                <BusySpinner/>
            </div>
        )
    }
}

let componentState = (state) => ({app: state.app});

module.exports = connect(componentState)(App);