import Head from "next/head";
import Header from "../../../components/Header";
import Video from "../../../components/Video";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import group5bg from "../../../public/group5bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>精神病患者的离婚案例分析- Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={group5bg}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>精神病患者的离婚案例分析</h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/1/c0007_c.mp4"
            }
          />
          <div className={styles.grid}></div>
        </section>
      </main>
    </div>
  );
}
