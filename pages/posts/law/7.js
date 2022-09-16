import Head from "next/head";
import Header from "../../../components/Header";
import Video from "../../../components/Video";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import group7bg from "../../../public/group7bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>婚内配偶同性恋行为导致的离婚纠纷案例分析- Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={group7bg}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>
            婚内配偶同性恋行为导致的离婚纠纷案例分析
            <br />
            Analysis of Divorce Disputes caused by Homosexual Behavior of
            Spouses in Marriage
          </h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/1/c0009_c.mp4"
            }
          />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/2/7.mp4"
            }
          />
          <div className={styles.grid}></div>
        </section>
      </main>
    </div>
  );
}
