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

class ContactContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showQRCode: false
        }
    }

    render() {
        return (
            <div>
                <Navigator current={"contact"}/>
                <div className={styles.content_container}>
                    <section className={styles.contact_content}>
                        <p>
                            为了更好的传播TED理念，
                            <br/>
                            完善城市TEDx社群的建成，
                            <br/>
                            我们，永不停歇。
                            <br/>
                            尖峰创想，启迪未来。
                            <br/>
                            TEDxGuanggu团队期待你的关注。 </p>
                    </section>
                    <section className={styles.contact_header}>
                        {this.state.showQRCode ?
                            <a className={cn(styles.contact_item, styles.wechat_qrcode)}
                               onClick={this.toggleQRCode.bind(this)}>
                                <p>扫二维码关注 TEDx光谷</p>
                            </a>
                            :
                            <a className={cn(styles.contact_item, styles.wechat)}
                               onClick={this.toggleQRCode.bind(this)}>
                                <p>TEDx光谷</p>
                            </a>
                        }
                        <a className={cn(styles.contact_item, styles.weibo)} href="http://weibo.com/u/5878485158"
                           target="_blank">
                            <p>@TEDxGuanggu</p>
                        </a>
                        <a className={cn(styles.contact_item, styles.email)} href="mailto:contact@tedxguanggu.org"
                           target="_blank">
                            <p>contact@tedxguanggu.org</p>
                        </a>
                    </section>
                </div>
            </div>
        )
    }

    toggleQRCode() {
        this.setState({
            showQRCode: !this.state.showQRCode
        })
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(ContactContainer);