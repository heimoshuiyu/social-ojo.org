import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import ClickForMore from "../components/ClickForMore";

import mainbg from "../public/mainbg.webp";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>主页 - Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header propBG={mainbg}></Header>

      <main className={styles.container}>
        <Link href="/posts/init" passHref>
          <section className={styles.postPreview}>
            <h2>Social OjO 正式成立</h2>
            <p>平台介绍、期望及使命</p>
            <small>发布于 2022-05-12</small>{" | "}<ClickForMore />
          </section>
        </Link>
        <hr />
        <Link href="/posts/law" passHref>
          <section className={styles.postPreview}>
            <h2>社会管理法律</h2>
            <p>小组研讨真实法律案件的案情和判决</p>
            <small>发布于 2022-07-06</small>{" | "}<ClickForMore />
          </section>
        </Link>
        <hr />
        <Link href="/posts/map" passHref>
          <section className={styles.postPreview}>
            <h2>全国灾害统计地图</h2>
            <small>发布于 2022-05-12</small>{" | "}<ClickForMore />
          </section>
        </Link>
      </main>
    </div>
  );
}

