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

class AboutContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigator current={"about"}/>

                <div className={styles.content_container}>
                    <section className={styles.about_header}
                             style={{backgroundImage: 'url(http://flyingant.oss-cn-hangzhou.aliyuncs.com/0440d15b-a75b-400e-b458-f8b533900a8d.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </section>
                    <section className={styles.about_content}>
                        <label>What is <b>TED</b> ?</label>

                        <p>
                            TED是一个诞生于1984年的美国非营利性组织，组织以年度TED演讲大会著称，致力于在时长不多于十八分钟的演讲中，通过严谨认真的演讲设计，传播有价值和说服力的观点。组织举办的TED大会每年在世界各地选址，集合众多不同领域的杰出人物，以他/她们最擅长的方式在演讲大会上分享自身对于科技、
                            社会、人性等的思考和探索。
                            <br/>
                            虽然TED是Technology,
                            Entertainment和Design的首字母缩写，但演讲者的领域已经逐步扩展到了各行各业，而TED自身也在26年后（至2010）由与会人数不过千的“晚宴”，成长为每天50万人观看其视频的社区。
                        </p>
                    </section>
                    <section className={styles.about_content}>
                        <label>What is <b>TEDx</b> ?</label>

                        <p>
                            TEDx是TED于2009年推出的延伸项目，使各个国家和地区中，致力于为本土带来类似TED的经历和体验的人士，得以获得品牌授权和活动指导，自行组织策划当地的TEDx活动。其中的x代表着independently
                            organized TED event（独立组织的TED活动）。
                            <br/>
                            官方发起的本土TEDx 项目，使人们不只局限于线上获得TED式的启迪，还可以线下参与充溢TED氛围的思想集会。
                        </p>
                    </section>
                    <section className={styles.about_content}>
                        <label>Who are <b>WE</b> ?</label>

                        <p>
                            TEDxGuanggu是2014年11月成立于武汉，并且正式通过美国TED官方批准授权的组织，已于2015年5月8日成功举办TEDxDōnghú活动，目前正进行着2016年度大会的筹备。组织旨在结合TED开放理念与武汉本土优秀思想，构建一个能分享精彩想法与非凡体验，促进民众文化交流，探索武汉城市发展的思想碰撞平台。
                            <br/>
                            为了更好地传播TED思想，建立武汉TEDx
                            社群，我们选取所在社区“武汉·中国光谷”的名字，成立了TEDxGuanggu。武汉东湖新技术产业开发区，人称中国光谷，是高新技术与智力密集区，以期“以光而名，聚光成谷”，成为光电子产业高地。这里诞生了中国第一根光纤，中国第一个光传输系统，光纤光缆生产规模全球第一。这些科技创想者更是试图展示科技与生活的关系，使科技牵手设计成为创新利器，为未来的生活图景创造更多的可能。TEDxOV即是在这样一种追求自主研发创新的积极氛围中，诞生的创想传播组织。
                        </p>
                    </section>
                    <section className={styles.about_content}>
                        <label><b>TEDx</b>Wuhan和<b>TEDx</b>Guanggu的关系？?</label>

                        <p>
                            此处的TEDxWuhan为在武汉的TEDx社群概念，并不代表具体某一场TEDx活动。目前TEDxGuanggu团队已知并建立了友好关系的TEDx队伍有（按字母顺序排列）：TEDxHBUE（湖经）、TEDxHBUT（湖工）、TEDxHUST（华科）、TEDxWHU（武大）、TEDxYouth@WMLIS（枫叶国际）和TEDxZUEL（财大）。
                            <br/>
                            根据TED官方规定，要举办一场TEDx活动，需要向TED官方申请执照，一个执照有效期一年，且组织在执照有效期内只能举办一场TEDx活动，也就是说一执照一活动。若需要继续举办该TEDx，申请更新执照，即可获得下次活动授权。
                            <br/>
                            TEDxOV组织期望申请到TEDxWuhan执照，而官方的条规中告知我们，若申请人想要申请城市名为活动名，则他/她必须为参加过TED官方年度大会的观众。由于我们在武汉一直没有寻找到TED官方大会的曾经参与者，因此，决定先完成让城市感受到思想的力量，不受阻碍地获得TED式体验的目标，进而不断努力，以期有日，TEDxOV能够成功举办城市大会。怀抱志向，我们建立了TEDxWuhan网站，为不遗漏曾经在武汉播下的每一颗思想种子，在此仔细记录武汉市内的TEDx活动情况，并在此社群中，与武汉中各个TEDx组织保持沟通交流，一起努力为武汉各个地方全面地带去思想风暴。
                            <br/>
                            倘若您想要参与TEDxGuanggu，抑或是您想要举办TEDxWuhan，请通过网站提供的联系方式联系我们。
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(AboutContainer);