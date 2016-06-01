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

class EventContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTitle: "",
            showDescription: false
        }
    }

    componentWillUnmount() {
        this.setState({
            selectedTitle: null,
            showDescription: false
        })
    }

    render() {
        var event_content_1 = <div className={styles.content_container}>
            <section className={styles.event_content}>
                <div className={styles.back} onClick={this.onBack.bind(this)}>返回</div>
                <label>2015 TEDxDōngHú“△X”年度大会活动介绍及主题解析</label>

                <p>May 8 , 2015</p>
            </section>
            <section className={styles.event_pic}
                     style={{backgroundImage: 'url(http://flyingant.oss-cn-hangzhou.aliyuncs.com/7c8220d6-b3a7-4888-a5ac-a8cab29db1a0.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
            </section>
            <section className={styles.event_content}>
                <p>2015 TEDxDōnghú年度大会</p>

                <p>时间：2015年5月8日 17：30——21：30</p>

                <p>地点：403国际艺术中心 （武汉市武昌区中南路街武珞路586号/地铁二号线宝通寺站A口出）</p>

                <p>主题：△x</p>
            </section>
            <section className={styles.event_content}>
                <p>△x，只属于你的未知变量。</p>

                <p>精确记录，你的每一次孤独而又壮丽的潜行。</p>
            </section>
            <section className={styles.event_content}>
                <b>LINE</b>

                <p>六岁时，△是老师教过的简笔画里的山丘，可小小的脑袋里也疑惑为什么山丘都是一模一样？</p>

                <p>高中时，△是数学试卷里一元二次方程的判别式，数不清有多少次，在这样的两个小时里，我们条件反射似的奋笔疾书，不知疲倦地分类讨论。</p>

                <p>二十二岁时，△是熟悉而安全的象牙塔。我们在塔里幻想星辰大海的征途，却不识真实人间的欢喜与疾苦。</p>

                <p>人到中年，△是稳定舒适，有儿有女的家，每一个重大决定都要携家带全地掂量掂量，至于梦想，随它去吧，就这样吧。</p>
            </section>
            <section className={styles.event_content}>
                <b>IF</b>

                <p>然而如果为你在所有的△旁边都加上一个x？</p>

                <p>当△丧失了它最稳定结构的特性，</p>

                <p>板结的生活是否开始美妙的松动，慢慢地，向更多方向，舒展开去。</p>

                <p>当△x开始成为衡量生活的尺度，</p>

                <p>一切奇思异想，特立独行是否有了新的注脚。</p>

                <p>那些圆形方形奇形怪状的山丘，或许不会再被说成是不合常识；</p>

                <p>那些拒绝重复作业和考试的学生，或许不会再被认作是叛逆者；</p>

                <p>那些以真切行动粉碎天真幻想的勇者，也许可以得到更多祝福；</p>

                <p>那些追逐月亮抛弃六便士的梦想家，也许可以得到更多理解。</p>
            </section>
            <section className={styles.event_content}>
                <b>REACTION</b>

                <p>同样仍是拥有无限可能的我们 ，就像是无数个未知变量的聚集。不知道这次TEDxDōngHú大会，是一场简单的思想的电荷交换，还是一次释放更大能量的聚变反应。</p>

                <p>与其摇摆，怀疑，不如和我们携手一起，挑战未知，见证△x的力量。</p>
            </section>
        </div>;
        var event_content_2 = <div className={styles.content_container}>
            <section className={styles.event_content}>
                <div className={styles.back} onClick={this.onBack.bind(this)}>返回</div>
                <label>今天只做一件事，心却深感充盈</label>

                <p>——记 “△X"2015年度大会</p>
            </section>
            <section className={styles.event_pic}
                     style={{backgroundImage: 'url(http://flyingant.oss-cn-hangzhou.aliyuncs.com/f54125c1-091a-4582-ad87-65a6b9edd564.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
            </section>
            <section className={styles.event_content}>
                <p>当发觉这个世界总是太多碎片，让我们花一天时间，用一场好演讲，认知更完整的世界，也找寻更完整的自身。</p>

                <p>所以，今天只做一件事。以思想漫游城市，遇见有识之士。</p>

                <p>2015年5月8日，TEDxDōngHú"△X"2015年度大会，于武汉403国际艺术中心成功举办，6位来自不同领域的讲者创意发声，分享他们眼中的△X。</p>

                <p>下面是各个思想传播者的分享回顾，让我们重新感受故事与思想擦出火花的闪光时刻。</p>
            </section>
            <section className={styles.event_content}>
                <b>第一位讲者：马人人</b>
                <b>《武汉那么大，我想带你们去看看》</b>

                <p>老武汉艺术家的风骨，独特的码头记忆，触手可得的江湖侠气。</p>

                <p>然而又不止于此，新一代的年轻人以更多元化的方式，不拘一格地，添加自己对于武汉文化的阐释，马人人解读24字之外的城市文明，也反观城市留在我们身上的难以复制的痕迹。</p>

                <p>
                    他说武汉老艺术家的风骨。瓢泼大雨，露天演出，年逾七旬的何祚欢先生直着背，撑着伞，清脆爽利的段子不紧不慢，娓娓道来。孰不知下场时，先生已是步履蹒跚，累到连脱外套的力气也没有了，而观众们记得的，是先生始终好听，掷地有声的武汉话。</p>
            </section>
            <section className={styles.event_content}>
                <b>第二位讲者：刘文祥</b>
                <b>《锈迹·足迹——谈谈武汉近代工业遗产》</b>

                <p>大自然是上帝的瑰丽杰作，而星罗棋布的城市则是人类的作品。我们是否可以更好地对待自己曾经辉煌的作品，哪怕那已是过去时。</p>

                <p>近代工业曾是一个城市的命脉，在烟囱倒下，高炉停火之后，我们是否可以更好地留存它的黄金时代，并且让那一代人的奋斗记忆不被完全抽空。</p>

                <p>他说记忆。工业遗产的记忆，不只是为时代淘汰的斑斑锈迹，它裹藏着近代文明的足迹与都市居民的乡愁。令人唏嘘不已的拆除之后，是否可以借他山之石亡羊补牢，给失落的城与人一点慰藉。</p>
            </section>
            <section className={styles.event_content}>
                <b>第三位讲者：张鹏</b>
                <b>《义务讲解员的别样打开方式》</b>

                <p>对于国家博物馆的一切，他像回到了家一样熟悉，甚至有朋友调侃，如果张鹏病倒，拨打120急救，不如直接拉到国博馆，他会立马好起来。</p>

                <p>如何传承历史文化？</p>

                <p>这是件大事，可他却大事化小，举重若轻，将文物的庄严凝重化作风趣幽默的解说，悄悄地，均匀地分入十二年的青春岁月中。</p>

                <p>如何平衡理想与现实？</p>

                <p>这是个大问题，可他却巧妙融合，自在游走，凭着一己深情，把志愿者过成了一种生活。</p>

                <p>他说博物馆。博物馆不是可有可无到此一游的景点，而是值得终生流连与学习的地方</p>

                <p>他也谈梦想。而立之年，辞去安稳工作，专心开起给孩子们的独立书店，不是因为有了梦想才这样做，而是在十二年义务讲解的坚持中看到梦想日渐清晰，日渐丰盈。</p>

                <p>朋朋哥，请再讲五十年，讲满一个甲子！</p>
            </section>
            <section className={styles.event_content}>
                <b>第四位讲者：葛磊</b>
                <b>《为公益去旅游》</b>

                <p>不是摇旗呐喊，更非居高临下。</p>

                <p>他用一次次真实相伴的旅行，释放内心的善意与关怀-----与盲人朋友海边听海，草原听风；组成面向中西部乡村教师的“梦想旅行团”，前往世界各大文明发源地游学。</p>

                <p>他说尊严。旅行是每一个人的权利，要为残障朋友们实现有尊严的旅行，让他们与这个世界，平等对话。</p>

                <p>“大海，你好吗！”———失明老人掬起海水扬洒时，如孩子般欢呼雀跃；春天农场里，聋童们天真烂漫地作画，画里有戴墨镜的草莓，棉花糖一样的房子，还有浅浅笑着的猫。</p>

                <p>公益旅游是否能走向产业化，变化出更多的可能性，仍在探索，还需努力。</p>

                <p>惟愿所有美好的念念不忘，都有动听的回响。</p>
            </section>
            <section className={styles.event_content}>
                <b>第五位讲者：杜帆</b>
                <b>《用慈悲的心，做善良的事》</b>

                <p>一边是与流浪宠物狗爽爽的朝夕相处间，他体会到胜似亲人的珍贵情感；另一边，他感受到的是网络时代里公益人士的艰难。</p>

                <p>高速公路上“百里截猫”一时轰动，可后续对于2800只流浪猫的救助却是困难重重。争议、真相、真心，如何应对，如何保有，杜帆诚恳讲述悲喜交集处的感悟与认识。</p>

                <p>他说慈悲。被主人抛弃的流浪狗爽爽，一直望向门外的身影和止不住的眼泪，让他相信万物皆有灵，与其说是救助流浪宠物，不如说小动物们以其灵性，唤起人类的恻隐之心。</p>
            </section>
            <section className={styles.event_content}>
                <b>第六位讲者：黄睿</b>
                <b>《涂鸦进化论》</b>

                <p>细述涂鸦文化的前世今生，探讨涂鸦如何实现本土化，拆解一幅涂鸦作品的诞生历程。是任意门，也是时光机。他以涂鸦带你环游世界又回归古老武汉。</p>

                <p>他说开放心态。创作者不应局限于自己的小圈子。打开门窗，互相透透气。有时，正是看似毫不相关的事物，正是生活中不经意的日常，为创作注入新的活力。</p>

                <p>他的演讲，或许可以让你下一次看到涂鸦时，有了比“哇，好赞”更多的形容词。</p>
            </section>
            <section className={styles.event_content}>
                <p>文章最后，是长长的、认认真真的感谢。</p>

                <p>谢谢每一位讲者，用心无私的分享，我们知道，短短的十八分钟背后需要数以倍计的敲定和演练。</p>

                <p>谢谢每一位志愿者，从培训到准备阶段到当天幕后的一丝不苟，你们比想象中更富热情，更有能量。</p>

                <p>谢谢每一位工作人员，两个多月以来的辛勤付出，缺眠少觉，或是常态。即便梦里，也装着关乎大会的每个细节的你们，谢谢。</p>

                <p>谢谢来自社会各界朋友们的大力支持，你们的帮助是艰难时刻的抚慰力量。</p>

                <p>最后，自然少不了关注我们成长的每一位粉丝，</p>

                <p>你们的目光，无论赞赏还是批评，都是这条未知路上最美的陪伴。</p>

                <p>我们努力，在不远的未来，将武汉TEDx社区构筑完成，不论是TEDxGuanggu还是TEDxDōngHú，甚至是TEDxWuhan，让我们再次相约某一天，一起只做一件事：）</p>
            </section>
        </div>;
        var event_content_3 = <div className={styles.content_container}>
            <section className={styles.event_content}>
                <div className={styles.back} onClick={this.onBack.bind(this)}>返回</div>
                <label>友言 |TEDxGuanggu与第一位找到的老友见面后</label>
            </section>
            <section className={styles.event_content}>
                <p>三月的某一天，一篇发布于2015年9月10日的豆瓣日记，将我们带到了第一位老友面前。她叫款款。
                </p>

                <p>通过款款的微信公众号，我们与她取得了联系。简短交流后，我们发现，我们错过了太多与老友交流的机会。当时的大会上，有掌声，有静默，也有红了的眼眶，然而，我们没有能够在老友想要说些什么的时候，坐下来听一听。
                </p>

                <p>我们不想让更多的事情，不了了之，所以我们，准备了昨天发布的寻友企划。
                </p>

                <p>
                    款款是我们无意间，找到的第一位老友。她在文章中，讲到一部名著的开端并不一定像“我们想要赋予的那般高大宏伟”时，回想起TEDxDōngHú演讲嘉宾张鹏的一席话：并不是每项伟大的事业都会有一个美丽的开头。我们很高兴能看到，TEDx分享中的话语能存留在听者的心里，帮助你们在未来的某一天，有所悟，有所思。
                </p>

                <p>寻友企划进行的第二天，我们邀请到了款款，接下来，由她与我们讲述，我们和她之间的小小羁绊</p>
            </section>
            <section className={styles.event_content}>
                <b>热爱，让我们有缘相聚
                </b>
                <b>文/杜款款
                </b>

                <p>亲爱的TEDxGuanggu团队：
                </p>

                <p>看到你们的发布的《寻友启事》后，我想对你们说：缘分，真是这个世界上最奇妙的东西。
                </p>

                <p>
                    11个月前，当我在写《“刻薄”的冰心和“风骚”的屈原》时，从未想过会因它跟你们结识。彼时，作为TEDxDōngHú大会那1/100的入场观众，我还沉浸在近距离感受TED魅力的兴奋之中。记得那是个暮春的傍晚，现场气氛热烈，经典的黑、红、白色调，一下子就把我带入了TED的世界。这种身临其境、侧耳倾听的感觉真的非常棒。
                </p>

                <p>会后，我就很想找到你们，跟你们聊聊幕后的故事，只可惜终是错过。当时还深感遗憾，可没想到，兜兜转转，倒是因为在写文时灵光一闪，引用了演讲嘉宾张鹏所说的一段话而让你们找到了我。现在想起来，仍觉不可思议。
                </p>

                <p>
                    我所引用的那段话是：“并不是每项伟大的事业都会有一个美丽的开头。开启我的义务讲解员之旅的可不是某个轻舞飞扬的姑娘或某次涤荡灵魂的启示，而是大学时闲来无事的某个下午，刚好碰到了一位热心肠的讲解员大姐，且刚好国博在招最后一批志愿者——就是这些平凡无奇的‘刚好’让我走到了今天。”
                </p>

                <p>
                    此时此刻再回看这番表白，更是别有一番体会。因为也正是那么多个“刚好”，让曾经坐在观众席上的我，终于跟忙碌于台前幕后的你们聚到了一起。所以我想，也许总会有一种力量，将我们聚集。只要初心不改、热爱不息，这种力量就会化作一根神奇的红线，纵使曲折缠绕，也终能让彼此结缘。
                </p>

                <p>
                    说到热爱，我是在大学期间喜欢上TED的。作为英语系的学生，逻辑严谨、话题多元且内涵丰富的TED演讲可以算得上是练习听力的绝佳材料。而随着听过的演讲越来越多，这份喜欢也越加深刻，因为TED“传播有价值思想”的理念和“18分钟”高度浓缩的形式真的很了不起。
                </p>

                <p>
                    在我看来，TED最大的魅力有三点：分享、真实和公益心。如果当初传媒大亨克里斯·安德森没有大胆地将TED的演讲视频放到互联网上供所有人免费观看，那么TED就仍然只是“精英晚宴”和“贵族沙龙”，而不会形成如今的全球性社群。
                </p>

                <p>所以，每次演讲结束，看到屏幕上出现“Ideas Worth
                    Spreading”的字样时，就有一种幸福感油然而生。因为世界上有那么多优秀的人，我们并不相识，但他们愿意分享自己的思想，讲述自己的故事，来启迪我们的人生。
                </p>

                <p>在TED的世界里，你会觉得，尽管这个星球越来越匆忙疏离，但其实我们并不孤单。
                </p>

                <p>真的很高兴武汉还有你们这群TED人在坚持不懈地努力着，期待这个月底的2016年年度大会，更希望有一天能看到你们成功举办属于武汉的“千人大会”！
                </p>
            </section>
        </div>;
        var event_content_4 = <div className={styles.content_container}>
            <section className={styles.event_content}>
                <div className={styles.back} onClick={this.onBack.bind(this)}>返回</div>
                <label>TEDx光谷|寻友启事</label>

                <p>我们想找回去年的老友们，阁下可否帮我们找找</p>
            </section>
            <section className={styles.event_content}>
                <p>TEDxOpticsvalley，又名
                    TEDx光谷，作为主办方，于去年2015年5月8日举办了主题为“△X”的TEDxDōngHú活动。为了与武汉社群的各位分享盛会，我们于去年4月份开放了观众报名，并从此，拥有了许许多多好朋友。当时的他们，倾诉了最感兴趣的嘉宾，并且很认真地把他们所向往之事告诉了我们。
                </p>

                <p>他们都是非常可爱的人。
                </p>

                <p>
                    376天前，TEDxGuanggu发布了第一篇推文。2015年12月14日，我们似乎出了趟远门，不短的一段时间内几乎没有我们的一丁点儿消息。带着歉意与期待，我们尝试着联系每一个曾在一年前为我们投来热切目光的你，我们正在努力地发送邮件至他们留下的邮箱里。
                </p>

                <p>我们还是有点担心，他们会不会没有检查邮件的习惯，或者，他们已经更换了邮箱地址。
                </p>

                <p>所以，看到了推文的你，可以帮我们找一下他们吗，告知他们一声，这里有人在找你喔。
                </p>
            </section>
            <section className={styles.event_content}>
                <b>寻人启事
                </b>

                <p>TEDxGuanggu倾听者，
                </p>

                <p>热爱奇思妙想，对有意思的人和行动保持敏感，
                </p>

                <p>享受思想火花碰撞的瞬间，
                </p>

                <p>与充满未知和一切可能性的人生友好相处中。
                </p>

                <p>认识世界多年，仍然保持对它的好奇之心与探索的热情。
                </p>
            </section>
            <section className={styles.event_content}>
                <p>寻人线索：
                </p>

                <p>或许你曾经听身边的某个他/她提起过“TEDxDōngHú”？
                </p>

                <p>她/他有没有疑惑过一个又称TEDxDōngHú，又称TEDxOpticsvalley的组织？
                </p>

                <p>他/她有没有在去年5月8日前后，在朋友圈/微博/Instagram分享报名成功的信息，或是发出现场图文报道？有没有给你看过他/她参加TEDxDōngHú活动的周边？
                </p>

                <p>她/他有没有跟你说，有一个TEDx公众号很久没有发推文了，打算取关？
                </p>

                <p></p>

                <p>又或者，你就是那个他/她？
                </p>

                <p>你就是那个倾听者。
                </p>

                <p>我们正在找你，我们的老朋友。
                </p>

                <p>你对我们所有的疑问，
                </p>

                <p>对我们一切的建议，
                </p>

                <p>或是生活中有所发现，兴奋地想要分享的时刻
                </p>

                <p>每一个我们错过了的创想，我们都想知道。
                </p>
            </section>
            <section className={styles.event_content}>
                <p>【欢迎发送你的创见至公众号后台，老友们可以直接回复邮件至邮箱contact@tedxguanggu.org】
                </p>

                <p>【留言可以是有趣的身边事、好玩的新点子，或是想对TEDxGuanggu说的所有话。我们将于接下来几天，陆续在固定位置推出有感触有意思的留言。】
                </p>
            </section>
        </div>;
        var event_content_5 = <div className={styles.content_container}>
            <section className={styles.event_content}>
                <div className={styles.back} onClick={this.onBack.bind(this)}>返回</div>
                <label>留言集|这些都是你们给的礼物
                </label>

                <p>寻友企划进行第三天。这里有你的留言吗？</p>
            </section>
            <section className={styles.event_content}>
                <p>
                    寻友启事发布第三天，许多老友与TEDxGuanggu重新建立起联系，发来了问候的话语。见到你们的字，如同与你们见面一样，非常令我们心动。留言有积极回忆现场故事的，有表达期待下次相见的，有温言宽慰出门许久的我们的，也有向我们提好建议的。
                </p>

                <p>真是，世间有温情，人间有真爱。
                </p>

                <p>
                    留言还有一类，询问着——要如何报名加入到TEDxGuanggu团队；志愿者招募界面在哪里；如何进行观众报名。回答是：TEDxOpticsvalley2016年年度大会将于4月30日举办，近期会开始志愿者招募和观众报名，请大家密切关注这几天微信公众号的推文。
                </p>

                <p>接下来是一部分老友的留言。谢谢那些帮助我们找老友的好心人，谢谢联系我们的所有朋友。
                </p>

                <p>老友见老友，两眼泪汪汪。
                </p>
                <b>&#47;Jane Yang&#47;
                </b>

                <p>很高兴这个美好的春天里再次收到你们的来信，TEDx的字眼依旧是那么熟悉虽然我们一年未见。
                </p>

                <p>关注TED很久很久，来到武汉更是追随着每一场TEDx演讲，去年的现在得知这场TEDx的盛会更是欢欣若狂，也深知每一位TEDx成员的良苦用心。
                </p>

                <p>很幸运赴会，也第一次吃到了鲜花饼，第一次看到现场涂鸦，仍然清楚记得嘉宾的某些话语和动作，很是满足。
                </p>

                <p>我仍然期待下一场思想盛宴，所以我希望她会变得更好。
                </p>
                <b>&#47;一个木头&#47;
                </b>

                <p>邮箱里预想不到的来信，像是从天而降的礼物。我还记得当时嘉宾们平静的叙述，有趣的想法和令我佩服的实际行动。
                </p>

                <p>哲学家George berkeley说，存在即被感知（To be is to be
                    perceived），我可以感受到来自空间上遥远的你们对我的感知，而当时举办大会的你们，也被众多参与大会的我们而感知，我们印证了彼此的存在，因此再遥远的事情，也似乎变得真实可感。
                </p>

                <p>我认识了一个珍贵的你——TEDx光谷，收获了一场思想碰撞，还收到一封真挚的信。谢谢你们给予的温暖，期待你们的下一次大会。
                </p>
                <b>&#47;Nikki Liu&#47;
                </b>

                <p>收到联络电邮，很窝心，也很感动。当时坐我们身边的是一对老年韩国夫妇，不知联络上了没。
                </p>
                <b>&#47;Parapluie&#47;
                </b>

                <p>
                    嗯，是老友呢…既然作为老友就不会介意公号消失一段时间了去年参加了东湖的活动，还带了弟弟一起想想真的是很好的回忆。之前几天有听一句话：嘤其鸣矣，求其友声。相彼鸟矣，犹求友声。是《小雅·伐木》的一段文字，大概表达的是对友情的向往之情，觉得放在TEDx光谷这儿特别合适，真正的朋友算是可以经过灵魂交流的吧，期间不论沉默了多久，都会因为不能割断的联系而再次拥抱的更紧。而且有读了一本书中陈丹青有说，现在就是思想飞扬的最好的黄金时代，大意是这样。所以希望TEDx光谷继续做下去。嗯，老友嘛！会一直支持下去的哦。
                </p>
                <b>&#47;十一点睡先生&#47;
                </b>

                <p>TEDxDōnghú志愿者不请自来，哈哈，当时和小伙伴一块投的简历一块去面试的，那次大会让我学到了很多东西也认识了很多好朋友，和雏雏同学“狼狈为奸”的友谊一直持续到现在。
                    大会现场真的蛮震撼的，虽然忘了嘉宾们具体的发言内容，可那次应该是我第一次在一个现场认认真真的去听一些人的故事，去走近本来以为是遥不可及的一些人的生活，每个人都有去选择自己生活方式的权利，每种生活都有它独特的魅力，我们的世界也许就是在这种不同中去焕发出生机。（鲜花饼很好吃喷绘也很好看，哈哈）
                </p>
                <b>&#47;梵高先生&#47;
                </b>

                <p>在武汉这个打雷下雨的夜里收到你们邮件真是莫大的安慰，认识TED时间不是很长，但是让我受益匪浅，希望越办越好。
                </p>
                <b>&#47;芥末冰块&#47;
                </b>

                <p>谢谢来信。真的是很久，没听过你们的消息。我必须很严肃地对你们说，这样不好lol.
                    希望你们能找到更多的思想传播方式，与老友如我们——每次看到TED视频时都会想起上次参加的TEDxDōnghú的我们，保持密切联系。希望2016年大会顺利举办，志愿者们辛苦了。
                </p>
                <b>&#47;MC&#47;
                </b>

                <p>
                    去年的这个时候，我通过同学介绍知道了TEDx光谷，在参加了那一次活动以后被其贴近生活的思维火花所感染，演讲者都是我们周围的人，他们分享自己的经历与思维，给了我很大启发与思考。非常喜欢TEDx光谷，也很希望今年也有这样的大会，很期待哦~
                </p>
                <b>&#47;Kookie&#47;
                </b>

                <p>
                    TEDx团队，你们好哦。因为一直很想深入了解TED，所以有在关注TEDx活动，希望通过更多的活动体验，加上TED视频观看，更加明白为什么TED可以风靡起来，为什么思想可以通过短短的时间内完整地传达出来，而且还很入耳，很进脑子。上次有幸获得体验资格，感觉营造的氛围还是挺好的，大家一起坐在阶梯上，一起专注、思考，了解各种各样的生活方式和有趣的点子。如果今年有大会的话，希望你们能够有一些讲technology方面的讲者吧。 </p>
                <b>&#47;倔强的小咸鱼&#47;
                </b>

                <p>
                    去年参加TEDxDōnghú“△X”2015年度大会，让我认识了武汉本土的一些有为青年，还有一些热衷公益的人士，印象最深刻的是大鹏哥哥和武汉涂鸦鼻祖Ray。听TED的现场，比我在网上看ted的视频更有感染力，更喜欢参加类似的活动，因为它有趣而且可以让我的眼界更开阔，认识更多的朋友，了解很多有趣的事，今年的TED我依旧想参加。
                </p>

            </section>
        </div>;
        var content = null;
        switch (this.state.selectedTitle) {
            case 1 :
                content = event_content_1;
                break;
            case 2 :
                content = event_content_2;
                break;
            case 3 :
                content = event_content_3;
                break;
            case 4 :
                content = event_content_4;
                break;
            case 5 :
                content = event_content_5;
                break;
            default:
                content = event_content_1;
        }
        return (
            <div>
                <Navigator current={"event"}/>
                {this.state.showDescription ?
                    content
                    :
                    <div className={styles.content_container}>

                        <section className={styles.event_content}>
                            <label className={styles.event_title} onClick={this.onSelectTitle.bind(this, 5)}>留言集|这些都是你们给的礼物
                            </label>

                            <p>April 15 , 2016</p>

                            <p>寻友企划进行第三天。这里有你的留言吗？</p>
                        </section>

                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                        <section className={styles.event_content}>
                            <label className={styles.event_title} onClick={this.onSelectTitle.bind(this, 3)}>友言
                                |TEDxGuanggu与第一位找到的老友见面后</label>

                            <p>April 10 , 2016</p>
                        </section>

                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                        <section className={styles.event_content}>
                            <label className={styles.event_title}
                                   onClick={this.onSelectTitle.bind(this, 4)}>TEDx光谷|寻友启事</label>

                            <p>April 5 , 2016</p>

                            <p>我们想找回去年的老友们，阁下可否帮我们找找</p>
                        </section>

                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                        <section className={styles.event_header} onClick={this.onSelectTitle.bind(this, 2)}
                                 style={{backgroundImage: 'url(http://flyingant.oss-cn-hangzhou.aliyuncs.com/f54125c1-091a-4582-ad87-65a6b9edd564.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        </section>

                        <section className={styles.event_content}>
                            <label className={styles.event_title} onClick={this.onSelectTitle.bind(this, 1)}>今天只做一件事，心却深感充盈</label>

                            <p>——记 “△X"2015年度大会</p>

                            <p>当发觉这个世界总是太多碎片，让我们花一天时间，用一场好演讲，认知更完整的世界，也找寻更完整的自身......</p>
                        </section>
                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                        <section className={styles.event_header} onClick={this.onSelectTitle.bind(this, 1)}
                                 style={{backgroundImage: 'url(http://flyingant.oss-cn-hangzhou.aliyuncs.com/7c8220d6-b3a7-4888-a5ac-a8cab29db1a0.jpg)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        </section>

                        <section className={styles.event_content}>
                            <label className={styles.event_title} onClick={this.onSelectTitle.bind(this, 1)}>2015
                                TEDxDōngHú“△X”年度大会活动介绍及主题解析</label>

                            <p>February 18 , 2016</p>

                            <p>△x，只属于你的未知变量.....</p>
                        </section>
                    </div>
                }

            </div>
        )
    }

    onBack() {
        this.setState({
            selectedTitle: null,
            showDescription: false
        })
    }

    onSelectTitle(index) {
        this.setState({
            selectedTitle: index,
            showDescription: true
        })
    }
}

let componentState = (state) => ({
    app: state.app,
    status: state.app.get("status")
});

module.exports = connect(componentState)(EventContainer);