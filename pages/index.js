import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from '../components/Footer';

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>主页 - Social Eye</title>
        <meta name="description" content="Social eye 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.container}>
        <Link href="/posts/map" passHref>
          <section className={styles.postPreview}>
            <h2>全国灾害统计地图</h2>
            <small>发布于 2022-05-12</small>
          </section>
        </Link>
        <hr />
        <Link href="/posts/init" passHref>
          <section className={styles.postPreview}>
            <h2>Social OJO 正式成立</h2>
            <p>平台介绍、期望及使命</p>
            <small>发布于 2022-05-12</small>
          </section>
        </Link>
      </main>
    </div>
  );
}

