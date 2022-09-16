import Head from "next/head";
import Header from "../../../components/Header";
import Video from "../../../components/Video";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import group2bg from "../../../public/group2bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>杀人犯潜逃的重婚案例- Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={group2bg}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>
            杀人犯潜逃的重婚案例
            <br />
            The Case Analysis of Bigamy of Fugitive
          </h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/1/c0004_c.mp4"
            }
          />
          <Video
            src={
              "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/videos/2/2.mp4"
            }
          />
          <div className={styles.grid}></div>
        </section>
      </main>
    </div>
  );
}
