/**
 * Created by FlyingAnt on 3/23/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../../less/main.less'
import cn from 'classnames';

//actions
import RouteActions from '../../actions/RouteActions'

class NavigatorItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.current == this.props.path ?
            <div className={cn(styles.navigator_item, styles.selected)}>
                {this.props.name}
            </div>
            :
            <div className={styles.navigator_item} onClick={this.navigateTo.bind(this)}>
                {this.props.name}
            </div>
    }

    navigateTo() {
        this.props.dispatch(RouteActions.Actions.RedirectPath("/" + this.props.path))
    }
}

let componentState = (state) => ({
    routing: state.routing
});

module.exports = connect(componentState)(NavigatorItem);