/**
 * Created by FlyingAnt on 3/27/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../../less/main.less'
import cn from 'classnames';

class ListItemDetailBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.list_detail_item}>
                <div className={styles.avatar}
                     style={{backgroundImage: 'url('+this.props.avatarURL+')',backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}/>
                <div className={styles.introduction}>
                    <label>
                        <b>{this.props.name}</b><span>{this.props.addon}</span>
                    </label>

                    <p dangerouslySetInnerHTML={{__html: this.props.description}}>
                    </p>
                </div>
            </div>
        )
    }
}

let componentState = (state) => ({
    routing: state.routing
});

module.exports = connect(componentState)(ListItemDetailBox);