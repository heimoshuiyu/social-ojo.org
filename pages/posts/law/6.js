import Head from "next/head";
import Header from "../../../components/Header";
import Video from "../../../components/Video";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import group6bg from "../../../public/group6bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>离婚法- Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={group6bg}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>
            离婚法
            <br />
            Marriage Law Case Analysis
          </h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/1/c0008_c.mp4"
            }
          />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/2/6.mp4"
            }
          />
          <div className={styles.grid}></div>
        </section>
      </main>
    </div>
  );
}
