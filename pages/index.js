import Head from "next/head";
import Header from "../components/Header";
import PostPreview from "../components/PostPreview";

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
        <PostPreview
          href="/posts/init"
          title="Social OjO 正式成立"
          description="平台介绍、期望及使命"
          date="2022-05-12"
        />
        <hr />
        <PostPreview
          href="/posts/law"
          title="社会管理法律"
          description="小组研讨真实法律案件的案情和判决"
          date="2022-07-06"
        />
        <hr />
        <PostPreview
          href="/posts/map"
          title="全国灾害统计地图"
          description=""
          date="2022-05-12"
        />
      </main>
    </div>
  );
}
