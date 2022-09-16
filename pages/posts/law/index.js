import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Copyright from "../../../components/Copyright";
import Image from "next/image";

import styles from "../../../styles/Post.module.css";
import homeStyles from "../../../styles/Home.module.css";

import BG486 from "../../../public/486.webp";
import group1bg from "../../../public/group1bg.webp";
import group2bg from "../../../public/group2bg.webp";
import group3bg from "../../../public/group3bg.webp";
import group4bg from "../../../public/group4bg.webp";
import group5bg from "../../../public/group5bg.webp";
import group6bg from "../../../public/group6bg.webp";
import group7bg from "../../../public/group7bg.webp";

export default function LawPage() {
  return (
    <div>
      <Head>
        <title>法律案件分析 - Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header propBG={BG486}></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>社会管理法律</h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <div className={styles.grid}>
            <Link href="/posts/law/1" passHref>
              <div>
                <h3>
                  残疾人劳工案例分析
                  <br />
                  Disabled Labor Case Study
                </h3>
                <small>
                  <Copyright />
                  周鲲鹏、郑梦佳、郑可儿
                </small>
                <Image src={group1bg} />
              </div>
            </Link>

            <Link href="/posts/law/2" passHref>
              <div>
                <h3>
                  杀人犯潜逃的重婚案例
                  <br />
                  The Case Analysis of Bigamy of Fugitive
                </h3>
                <small>
                  <Copyright />
                  李昕玥、朱诗琪、张芷晴
                </small>
                <Image src={group2bg} />
              </div>
            </Link>

            <Link href="/posts/law/3" passHref>
              <div>
                <h3>
                  离婚案例分析
                  <br />
                  Divorce Case Analysis
                </h3>
                <small>
                  <Copyright />
                  黄珏晞、施适雨、易欣宇
                </small>
                <Image src={group3bg} />
              </div>
            </Link>

            <Link href="/posts/law/4" passHref>
              <div>
                <h3>
                  针对未成年人的性侵犯案件分析
                  <br />
                  Analysis of Sexual Assault Case against Minors
                </h3>
                <small>
                  <Copyright />
                  马玉、杨思怡、梁欣
                </small>
                <Image src={group4bg} />
              </div>
            </Link>

            <Link href="/posts/law/5" passHref>
              <div>
                <h3>
                  精神病患者的离婚案例分析
                  <br />
                  Divorce Case Analysis of Mentally Ill Patients
                </h3>
                <small>
                  <Copyright />
                  林思源 吴懿鹏
                </small>
                <Image src={group5bg} />
              </div>
            </Link>

            <Link href="/posts/law/6" passHref>
              <div>
                <h3>
                  离婚法
                  <br />
                  Marriage Law Case Analysis
                </h3>
                <small>
                  <Copyright />
                  陈愿妃、张诺清、杨小满
                </small>
                <Image src={group6bg} />
              </div>
            </Link>

            <Link href="/posts/law/7" passHref>
              <div>
                <h3>
                  婚内配偶同性恋行为导致的离婚纠纷案例分析
                  <br />
                  Analysis of Divorce Disputes caused by Homosexual Behavior of
                  Spouses in Marriage
                </h3>
                <small>
                  <Copyright />
                  陈久如、郑志泓
                </small>
                <Image src={group7bg} />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
