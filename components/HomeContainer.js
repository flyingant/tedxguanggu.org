/**
 * Created by FlyingAnt on 3/23/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../less/main.less'
import cn from 'classnames';

//actions
import RouteActions from '../actions/RouteActions'

//component
import Navigator from '../components/navigator/Navigator'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigator current={"home"}/>

                <div className={styles.home_background}>
                </div>
                <div className={styles.home_container}>
                    <section className={styles.home_logo}>
                        <b>TEDx</b> Guanggu
                    </section>
                    <div className={styles.home_item_container}>
                        <div className={styles.home_item}>
                            <label>
                                协作/ Collaborate
                            </label>

                            <p>
                                拥有奇思妙想的讲者是TEDxGuanggu非常珍重的，为了使社区更好地获取讲者想要分享的内容，我们会不遗余力地协助讲者做准备，帮助其巧妙地组织新鲜而有力的话语，共同完成每一个精彩绝伦的18分钟。
                            </p>
                        </div>
                        <div className={styles.home_item}>
                            <label>
                                给予/ To Give
                            </label>

                            <p>
                                TEDxGuanggu致力于通过TED独特的呈现方式，给予听者值得传播的观点，我们和讲者一道，迫切地渴望为武汉地区带来优秀的思想。我们努力使内容展现得极富吸引力，并引导听者沉浸其中，以获得良好的视听体验和强烈共感。
                            </p>
                        </div>
                        <div className={styles.home_item}>
                            <label>
                                唤醒/ Awaken
                            </label>

                            <p>
                                TEDxGuanggu演讲期望能使听者心灵和思想上被触动，唤起内心深处想要走出舒适圈的想法，帮助听者发现使人生更丰富、使世界更美妙的不同种可能，然后通过行动，实现一个更期待的自己，从遥远的外界到周围环境，从身到心，体会到改变。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(HomeContainer);