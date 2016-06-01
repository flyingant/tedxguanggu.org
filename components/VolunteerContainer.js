/**
 * Created by FlyingAnt on 3/23/16.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from '../less/main.less'
import cn from 'classnames';
import {_} from 'lodash'

//component
import Navigator from '../components/navigator/Navigator'
import ListItemBox from '../components/common/ListItemBox'
import ListItemDetailBox from '../components/common/ListItemDetailBox'

const volunteer_data = [
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/4a706f3a-cceb-45c6-88a5-f602122b6958.jpg",
        name: "林晓慧",
        addon: "策展人",
        description: "元气双子，人生就是不断测bug，笑容满面前行就好。但期足下有履一双，便如金鹰，坦坦荡荡，哪里都去得。TEDxGuanggu早期成员之一，主要负责嘉宾及对外事务。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/da452176-4e19-49f5-a621-7973e936082c.jpg",
        name: "陆晓萱",
        addon: "嘉宾组",
        description: "武汉大学大四在读，力学专业，九月份即将入读北京理工大学深空探测研究所。TEDxWuhanUniversity2015冬季大会联合策展人，武汉大学天文协会发起人，TEDxGuanggu嘉宾组成员。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/904b9252-50fd-4c8b-a1c0-3567e4e47d84.jpg",
        name: "张欣怡",
        addon: "嘉宾组",
        description: "热诚、笃定、从心。爱好包括但不限于美人、美食、美景，书影重度中毒，来者不拒。时刻期待生活趣味，爱好接触新事物；热衷从他人智慧中汲取养分，希望与人交流并能加以传播。混过组织策划文案设计，但也许自己还存在更多可能性。希望在TEDxGuanggu，亲历思想的革新。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/16d22eba-0a43-40cb-8357-70d818d73d9e.jpg",
        name: "陈雅韵",
        addon: "嘉宾组",
        description: "普通大学生一枚，现在徘徊于各种考试之中。两年前一个偶然的机会加入TEDxZUEL,从此开始了与TEDx的不解之缘。现在有幸能够参加TEDx光谷，负责嘉宾联系的有关工作。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/727e770e-76c7-47da-8025-413dd944aae8.jpg",
        name: "邓然",
        addon: "嘉宾组",
        description: "一个痴迷于书籍和吐槽的伪少女。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/0e57d9e3-b2d4-475c-96d8-9c3b7e6ff70d.jpg",
        name: "冯啟垚",
        addon: "嘉宾组",
        description: "主要负责嘉宾的跟进与沟通。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/d2475d62-3552-4cfa-91f9-bb2a02666f07.jpg",
        name: "朴绎燃",
        addon: "嘉宾组",
        description: "东北姑娘就读于中南财经政法大学，TEDxGuanggu成员，对艺术和策展充满激情。希望TEDxGuanggu团队的努力，能让这个世界有些许的不同，仅有一点改变也足以是对我们付出最欣慰的肯定。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/1a0d20ed-b8f1-4ab8-afd2-f5a79bfe9bac.jpg",
        name: "付远",
        addon: "宣传组",
        description: "Designer，长在北方的南方人，视觉传达设计专业，喜欢不务正业。玩过模联做过主席，干过新闻当过记者，搞设计的同时还不忘玩点鬼畜。什么有趣做什么，怎么折腾怎么来。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/98ee658b-12fd-463f-bc1f-a76f6f7ca0ec.jpg",
        name: "莫志骞",
        addon: "宣传组",
        description: "TEDxGuanggu团队成员，曾参与筹办2015年武汉地区TEDx DōngHú活动，负责其中宣传工作。同时也是TEDxZUEL团队成员，参与筹办多期学校大会。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/de6785f6-0eb1-407f-b17b-80e4a4824895.jpg",
        name: "何瑾瑜",
        addon: "宣传组",
        description: "杭州市中小学生射击团体赛亚军，杭州外国语学校第一学期黑板报第四名，华科杯节奏大师锦标赛举办人，台湾机车零车祸纪录保持者，徒手剥螃蟹腿腿大赛冠军，朋友圈戛纳小视频节大奖得主，劝分不劝和感情大师。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/6505e150-9af3-42f9-9784-f16639b1701b.jpg",
        name: "蚂蚁",
        addon: "宣传组",
        description: "一个粉刷匠！"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/e86dd41d-4708-4a38-a9e9-2c68cdf1475d.jpg",
        name: "孔銮铉",
        addon: "市场组",
        description: "TED的资深粉丝，美院出身，自媒体创业者。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/25e8918d-d9f3-4bab-a926-23929908f43f.jpg",
        name: "方佳婷",
        addon: "市场组",
        description: "半吊子广告人，想趁能跑能跳能吃的时候多耍多飞多多看世界。对一切充满极度好奇，却爱不过三秒。胆子很大，神经很粗。陪伴TEDxGuanggu一同成长，热爱参与其中发现生活不同可能性的妙处，喜欢思想碰撞之间每一个细胞都在跳舞的喜悦。相信思考的力量。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/7e834897-a162-45e4-b521-39903005c76b.jpg",
        name: "王慧婷",
        addon: "市场组",
        description: "四年大学，3/4时间在做TEDx，喜欢各种各样的人，喜欢五花八门的武汉，TEDxZUEL策展团队成员，在TEDxGuanggu团队中负责活动策划。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/1e98ee59-8429-47dd-9262-ebb7ba430000.jpg",
        name: "蒋依文",
        addon: "市场组",
        description: "谨而又慎，一直困惑。思而不勤，一直学习。为悸动感上路，为赏好景缓行。于TEDxGuanggu中参与运营计划的执行工作。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/a43c3526-a7a5-4a13-8102-f426dd89966b.jpg",
        name: "朱丽娅",
        addon: "市场组",
        description: "Entrepreneurship mentor，I work with local Incubator in helping innovators for Team Building, Raising Capital, and Projects Propagating. <br/>I'm passionate about using the creativity of thoughts and ideas to address some of the world's biggest challenges!"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/a89bfe53-d11f-49dc-b81a-b55d0d4baf58.jpg",
        name: "陈腾远",
        addon: "设计组",
        description: "灵魂UI设计师！"
    },
    {
        avatarURL: "",
        name: "",
        addon: "",
        description: ""
    }

]

class VolunteerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            overlayDisplayStatus: true,
            selectedVolunteer: null
        }
    }

    render() {
        return (
            <div>
                <Navigator current={"volunteer"}/>

                <div className={styles.volunteer_container}>
                    <section className={styles.volunteer_header}>
                        <b>TEDx</b> Guanggu
                    </section>
                    {
                        volunteer_data.map((item, index)=> {
                            return <ListItemBox key={index} display={true} index={index} avatarURL={item.avatarURL}
                                                name={item.name} addon={item.addon}
                                                description={item.description} onSelect={this.onSelect.bind(this)}/>
                        })
                    }
                </div>
                {
                    this.state.overlayDisplayStatus && this.state.selectedVolunteer != null ?
                        <div className={styles.overlay}>
                            <div className={styles.overlay_container}>
                                <ListItemDetailBox avatarURL={this.state.selectedVolunteer.avatarURL}
                                                   name={this.state.selectedVolunteer.name}
                                                   addon={this.state.selectedVolunteer.addon}
                                                   description={this.state.selectedVolunteer.description}/>
                            </div>
                            <div className={styles.hide} onClick={this.onHideOverlay.bind(this)}>
                                &times;
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        )
    }

    onSelect(index) {
        this.setState({
            selectedVolunteer: volunteer_data[index],
            overlayDisplayStatus: true
        })
    }

    onHideOverlay() {
        this.setState({
            overlayDisplayStatus: false
        })
    }
}

let componentState = (state) => ({});

module.exports = connect(componentState)(VolunteerContainer);