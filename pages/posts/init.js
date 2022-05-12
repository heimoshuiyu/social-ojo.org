import Head from "next/head";
import Header from "../../components/Header";

import styles from "../../styles/Post.module.css";
import homeStyles from "../../styles/Home.module.css";

export default function Init() {
  const title = "Social OjO 正式成立";
  return (
    <div>
      <Head>
        <title>{title} - Social Eye</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>{title}</h2>
          <small>发布于 2022-05-12</small>
          <p>今天是汶川大地震的十四周年，也是国家每年的防灾减灾日。</p>
          <p>
            十四年前，UIC二百多名
            师生在地震发生后前赴后继地奔赴灾区，在三江，水磨，绵竹等地提供了灾后社区关怀服务。虽然力量有限，服务为期不长，但师生对灾后服务的情景都记忆猶新。今天我们仍在和水磨镇的小伙伴们在话家常。
          </p>
          <p>
            自此，在UIC我们开设了一门灾害社会工作的选修课，探索社会工作者在灾变管理的角色和社会心理应急特别是危机干预介入的技巧。
          </p>
          <p>
            转眼间我们已进入数字时代。数字社交平台在武汉疫情期间使我们能在线上提供危机干预培训和督导。更在线上陪同当地社工、社区工作者和志愿者为社区內的新冠患者及其家人提供社会心理服务，也可以连接基金会进行精准捐赠。以同一模式我们服务了2020年在湖北滞留的香港市民，在南韩的我国留学生，和2022年面对奥米克隆的香港市民。值得一提的是我们数十名毕业生，都参与到线上服务当中。
          </p>
          <p>
            数字社会工作的基础经已建立。大数据也能应用于灾害救援，郑州洪灾期间，透过收集求助信息志愿者不眠不休地尝试连接求救者和救援队，也用GIS
            技术将求救者和救援队的位置显示出来，中间有多少失望，又有多少惊喜，不足为外人道。UIC一名毕业生，自行组织了一个信息志愿队，加入了捜救者的行列，不求名利，实在令人感动。现在各个盈利地图都在大灾时开放求助信息通道，其实是向社会学习。
          </p>
          <p>
            今天是国家防灾减灾日，为传承及颂掦UIC师生在灾难靣前挺身而出的优良传统，我邀请了一群同学，主要是社会工作及社会行政三，四年级，也有其他三个学部的同学，制作了一个中囯灾害地图，利用可视化的效果，让大家初步了解中国的灾害情况。
          </p>
          <p>
            这只是漫漫防灾长路的一步，不是第一步，也肯定不是最后一步。请批评，指正，和参与。
          </p>
          <p>
            黄匡忠
            <br />
            北师港浸大
            <br />
            2008+14, 05,12。
            <br />
          </p>
        </section>
      </main>
    </div>
  );
}

