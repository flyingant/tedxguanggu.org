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
import ListItemBox from '../components/common/ListItemBox'
import ListItemBoxWithDate from '../components/common/ListItemBoxWithDate'
import ListItemDetailBox from '../components/common/ListItemDetailBox'

const guest_data = [
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/a0fec466-96d7-41b0-8a44-c1961f74f620.png",
        name: "张鹏",
        addon: "",
        date: "May 8, 2015",
        description: "毕业于中国政法大学社会学、法学专业，获哲学、法学学士学位。现为青少年阅读推广人，忆空间阅读体验馆馆长。北京青联委员，北京博物馆学会志愿者专业委员会秘书长，四月公益博物馆志愿者协会创始人。国家博物馆、世界艺术馆义务讲解员十二年。于他，这是抗拒浮躁，传递博物之美的逆流而上。" +
        "<br/>“志愿者本可以也应该是一种生活方式。”" +
        "<br/>“即使爱好和理想在短期内不能实现，也要让它以另一种方式活着。”"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/21ed7f5f-d996-4252-aa70-94ddcf4d3793.png",
        name: "葛磊",
        addon: "",
        date: "May 8, 2015",
        description: "公益旅人，致力于青少年成长的公益服务，在清华、北大、北航、西藏大学等全国60多所高校举办过公益讲座。曾在担任中青旅社会责任总监时，策划发起国内首个系列盲人公益旅行团“听海”、“听风”、“听城”，以及面向乡村教师的“梦想旅行团”。2014年出版畅销书《台湾单车环岛笔记》。葛磊是行者，也是分享者，更是旅游与公益的嫁接者。于他，这是异想天开，又恪守本心的潇洒壮游。" +
        "<br/>风自磊落光明的心中来，" +
        "<br/>自这珍贵的人间来，" +
        "<br/>或有阻挡，或是曲折，" +
        "<br/>但从未停歇。" +
        "<br/>“人生最疯狂的事情，就是相信自己。”"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/c1c045fa-a306-4ff2-8699-472a908cb700.png",
        name: "杜帆",
        addon: "",
        date: "May 8, 2015",
        description: "武汉市小动物保护协会负责人，武汉市第十三届青联委员，武汉市生命关怀人道教育幼儿公益讲师，在武汉专注动物保护工作长达九年，用自己的行动影响、感召着身边的朋友和千千万万的武汉市民，对动物给予更多的关爱和对生命的尊重。提倡人与动物，相信人与自然是相互关联，不可分割的。" +
        "<br/>杜帆以个人微小的坚持为开头，渐渐汇聚众人之力，细细书写了一封给流浪宠物的朴素情书。2015年，正值志愿生涯的第十年，他仍在继续，一字一句，点点心血，不敢辜负。" +
        "<br/>于他，这是穿行于琐杂与热忱的天真守护。" +
        "<br/>“救助流浪狗狗会教会我们很多事，而最重要的是，这是人类灵魂的最后良药。”"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/5c4c93a6-4285-463a-8efc-cbdb5064ec5b.png",
        name: "马人人",
        addon: "",
        date: "May 8, 2015",
        description: "上层传媒董事，副总经理，《上层》杂志主编，新媒体品牌What创始人。他文艺与毒舌齐飞，逼格共颜值一色。他是执拗专情的武汉控，他是任性诗意的生活家。在学成归汉以后的六年时间，全力以赴地与这座城市相处，更了解武汉的过程中，他慢慢发现， 武汉在他身上留下了的温度、空气、阳光和水的痕迹。" +
        "<br/>马人人，带你重新阅读武汉，静下心或是躁起来，都可以带你找到，与这座城市更好的，相处相知的方式。于他，这是剪烛共饮，浓谈相宜的江湖夜话。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/47d74108-8597-4e01-9590-409f54798ec4.png",
        name: "刘文祥",
        addon: "",
        date: "May 8, 2015",
        description: "武汉大学历史学院博士研究生，数年来参与保护汉口福新第五面粉厂旧址、基督教救世堂、生活书店汉口分店旧址、汉口辅义里瞿秋白旧居、黄石下陆老火车站、宝鸡申新纱厂旧址等历史建筑。2010年拍摄纪录片《汉口，汉口》，关注武汉城市文化遗产消亡和保护问题。" +
        "<br/>一声来自民间的呐喊，一次追寻城市记忆的对话，一同思考，想要看到的过去与未来。于他，这是叩问工业遗产未来的素履之往。"
    },
    {
        avatarURL: "http://flyingant.oss-cn-hangzhou.aliyuncs.com/e16da1ec-cba7-415e-a492-8619bd61f79e.png",
        name: "黄睿",
        addon: "",
        date: "May 8, 2015",
        description: "于2004年开始涂鸦创作，如今已是第11年,是中国涂鸦圈元老级人物，也是华中地区涂鸦代表人物。现经营一家自己的工作室，并且担任湖北美术学院涂鸦课程讲师。曾担任全国各大型涂鸦比赛评委；活动嘉宾。接受各地媒体专访、采访。作品遍布武汉三镇、全国各地(北京·上海·广州·深圳·重庆·杭州·乌鲁木齐·香港等)。" +
        "<br/>他思考涂鸦中的中国元素，地方特色，于是有了青铜器图腾，楚国玉器纹和疯狂的521路公交车。思考自然与城市，居民的关系，于是有了消失的松鼠，猫头鹰和江豚再现画中，隐秘批判。" +
        "<br/>然而，经过十一年的沉淀，反省和探索，他还想要告诉你——涂鸦不仅仅是叛逆，占领和反抗的代名词。在好的环境里，它可以是与这座城市，与这条街道的一个开诚布公的大拥抱。" +
        "<br/>于他，这是以创意唤醒街头的色彩交响乐。"
    },

]

class GuestContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            overlayDisplayStatus: true,
            selectedGuest: null
        }
    }

    render() {
        return (
            <div>
                <Navigator current={"guest"}/>

                <div className={styles.guest_container}>
                    {
                        guest_data.map((item, index)=> {
                            return <ListItemBoxWithDate key={index} display={true} index={index}
                                                        avatarURL={item.avatarURL}
                                                        name={item.name} addon={item.addon} date={item.date}
                                                description={item.description} onSelect={this.onSelect.bind(this)}/>
                        })
                    }
                </div>
                {
                    this.state.overlayDisplayStatus && this.state.selectedGuest != null ?
                        <div className={styles.overlay}>
                            <div className={styles.overlay_container}>
                                <ListItemDetailBox avatarURL={this.state.selectedGuest.avatarURL}
                                                   name={this.state.selectedGuest.name}
                                                   addon={this.state.selectedGuest.addon}
                                                   description={this.state.selectedGuest.description}/>
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
            selectedGuest: guest_data[index],
            overlayDisplayStatus: true
        })
    }

    onHideOverlay() {
        this.setState({
            overlayDisplayStatus: false
        })
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(GuestContainer);