import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Copyright from "../../components/Copyright";
import Image from "next/image";

import styles from "../../styles/Post.module.css";
import homeStyles from "../../styles/Home.module.css";

import typhoonMapPreview from "../../public/typhoon.png";
import doughtMapPreview from "../../public/dought.png";
import snowMapPreview from "../../public/snow.jpg";
import workInjureMapPreview from "../../public/workInjury.png";
import geologicalDisasterMapPreview from '../../public/geological.png';
import earthquakeMapPreview from '../../public/earthquake.png';
import forestFireMapPreview from '../../public/forestFire.png';
import floodsAndDroughtsMapPreview from '../../public/floodsAndDroughts.png';
import trafficAccidentsMapPreview from '../../public/traffic.png';

export default function Init() {
  return (
    <div>
      <Head>
        <title>Social OjO 正式成立 - Social OjO</title>
        <meta name="description" content="Social OjO 官方网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>全国灾害统计地图</h2>
          <small>发布于 2022-05-12</small>
          <hr />
          <div className={styles.grid}>
            <Link
              href="https://umap.openstreetmap.fr/zh/map/map_761199#4/36.24/122.08"
              passHref
            >
              <div>
                <h3>各省受台风影响地图</h3>
                <small>
                  <Copyright />
                  吴懿鹏 & 林思源
                </small>
                <Image src={typhoonMapPreview} />
              </div>
            </Link>
            <Link
              href="https://umap.openstreetmap.fr/zh/map/drought-disasters-in-chinas-provinces-from-2014-to_758463#5/34.940/109.248"
              passHref
            >
              <div>
                <h3>各省干旱灾害地图</h3>
                <small>
                  <Copyright />
                  Keer ZHENG & Mengjia ZHENG
                </small>
                <Image src={doughtMapPreview} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div>
                <h3>各省雪灾影响地图</h3>
                <small>
                  <Copyright />
                  Shuyi GUO
                </small>
                <Image src={snowMapPreview} />
              </div>
            </Link>
            <Link href="https://umap.openstreetmap.fr/en/map/gis_756551#5/37.020/103.623" passHref>
              <div>
                <h3>各省工伤统计地图</h3>
                <small>
                  <Copyright />
                  Stanley, Lori, & Kristin.
                </small>
                <Image src={workInjureMapPreview} />
              </div>
            </Link>
            <Link href="https://umap.openstreetmap.fr/zh/map/geological-disasters-in-mainland-china_758447#4/39.44/104.15" passHref>
              <div>
                <h3>各省突发地质灾害地图</h3>
                <small>
                  <Copyright />
                  Sherry, Ivy, & Rika
                </small>
                <Image src={geologicalDisasterMapPreview} />
              </div>
            </Link>
            <Link href="https://umap.osm.ch/en/map/map_4637#4/41.44/118.21" passHref>
              <div>
                <h3>新中国成立后各省地震数据</h3>
                <small>
                  <Copyright />
                  陈九如, 刘梦蝶, & 周鲲鹏
                </small>
                <Image src={earthquakeMapPreview} />
              </div>
            </Link>
            <Link href="https://umap.openstreetmap.fr/en/map/forest-fires-data-map-of-china-2015-2020_753341#4/35.89/104.24" passHref>
              <div>
                <h3>各省森林火灾地图</h3>
                <small>
                  <Copyright />
                  Jessie, Peggy, & Cindy
                </small>
                <Image src={forestFireMapPreview} />
              </div>
            </Link>
            <Link href="https://umap.openstreetmap.fr/en/map/untitled-map_758141#4/41.97/106.83" passHref>
              <div>
                <h3>各省洪涝旱灾地图</h3>
                <small>
                  <Copyright />
                  Jade, Cherry, & Mia
                </small>
                <Image src={floodsAndDroughtsMapPreview} />
              </div>
            </Link>
            <Link href="http://umap.openstreetmap.fr/en/map/traffic-accidents_756060#4/40.38/107.58" passHref>
              <div>
                <h3>各省交通事故地图</h3>
                <small>
                  <Copyright />
                  Carolyn, Julianne, & Selina
                </small>
                <Image src={trafficAccidentsMapPreview} />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
