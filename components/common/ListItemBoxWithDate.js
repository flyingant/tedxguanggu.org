/**
 * Created by FlyingAnt on 3/27/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../../less/main.less'
import cn from 'classnames';

class ListItemBoxWithDate extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Guest data:", this.props);
        return this.props.display ?
            <div className={styles.list_item} onClick={this.onSelect.bind(this)}>
                <div className={styles.avatar}
                     style={{backgroundImage: 'url('+this.props.avatarURL+')',backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}/>
                <label>
                    <b>{this.props.name}</b> <span> {this.props.addon}</span>
                </label>

                <p>
                    {this.props.date}
                </p>
            </div>
            : <div className={styles.list_item}/>
    }

    onSelect() {
        this.props.onSelect(this.props.index)
    }

}

let componentState = (state) => ({
    routing: state.routing
});

module.exports = connect(componentState)(ListItemBoxWithDate);