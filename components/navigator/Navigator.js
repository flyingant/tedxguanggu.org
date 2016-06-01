/**
 * Created by FlyingAnt on 3/23/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../../less/main.less'
import cn from 'classnames';

import NavigatorItem from './NavigatorItem'

class Navigator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showNavigator: true
        }
    }

    render() {
        return (
            <div className={styles.navigator_container}>
                <div className={styles.navigator_hamburger} onClick={this.toggleDisplay.bind(this)}></div>
                {this.state.showNavigator ?
                    <div className={styles.navigator}>
                        <NavigatorItem onHideMenu={this.onHideMenu.bind(this)} current={this.props.current}
                                       name={"HOME"} path={"home"}/>
                        {/*
                         <NavigatorItem current={this.props.current} name={"NEWS"} path={"news"}/>
                         */}
                        <NavigatorItem current={this.props.current} name={"NEWS"} path={"event"}/>
                        <NavigatorItem current={this.props.current} name={"GUEST"} path={"guest"}/>
                        <NavigatorItem current={this.props.current} name={"VOLUNTEER"} path={"volunteer"}/>
                        <NavigatorItem current={this.props.current} name={"ABOUT"} path={"about"}/>
                        <NavigatorItem current={this.props.current} name={"CONTACT"} path={"contact"}/>
                    </div>
                    : null
                }

            </div>
        )
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.setState({
                showNavigator: true
            })
        } else {
            this.setState({
                showNavigator: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    onHideMenu() {
        this.setState({
            showNavigator: false
        });
    }

    toggleDisplay() {
        this.setState({
            showNavigator: !this.state.showNavigator
        })
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(Navigator);