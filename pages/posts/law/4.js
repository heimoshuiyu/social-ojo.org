import Head from "next/head";
import Header from "../../../components/Header";
import Video from "../../../components/Video";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import group4bg from "../../../public/group4bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>针对未成年人的性侵犯案件分析- Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={group4bg}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>
            针对未成年人的性侵犯案件分析
            <br />
            Analysis of Sexual Assault Case against Minors
          </h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/1/c0006_c.mp4"
            }
          />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/2/4.mp4"
            }
          />
          <div className={styles.grid}></div>
        </section>
      </main>
    </div>
  );
}
