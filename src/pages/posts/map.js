import * as React from "react"
import * as styles from "../../styles/Post.module.css"
import * as homeStyles from "../../styles/Home.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {StaticImage} from "gatsby-plugin-image"
import Copyright from "../../components/Copyright"
import DownloadReport from "../../components/DownloadReport"

const MapPage = () => {
  return (
    <>
      <Header Background={
        <StaticImage placeholder="blurred"
          style={{
            gridArea: "1/1",
            maxHeight: "50vh",
          }}
          layout="fullWidth"
          src="../../images/typhoon.png"
          alt="Map background photo"
        />
      } />

      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>全国灾害统计地图 (Disasters Map of China)</h2>
          <small>发布于 2022-05-12</small>
          <hr />
          <div className={styles.grid}>
            <a
              href="https://umap.openstreetmap.fr/zh/map/map_761199#4/36.24/122.08"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省受台风影响地图 (Typhoons Map)</h3>
                <small>
                  <Copyright />
                  吴懿鹏 林思源
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Typhoon%20%20Dan%20%26%20Jimmy.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/typhoon.png" alt="Typhoons map preview" />
              </div>
            </a>
            <a
              href="https://umap.openstreetmap.fr/zh/map/drought-disasters-in-chinas-provinces-from-2014-to_758463#5/34.940/109.248"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省干旱灾害地图 (Drought Map)</h3>
                <small>
                  <Copyright />
                  郑可儿 郑梦佳
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Drought%20%20Eliza%20%26%20Sophia.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/dought.jpg" alt="Dought map preview" />
              </div>
            </a>
            <a
              href="https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/images/snow.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省低温冰雪灾害地图 (Low Temprature Map)</h3>
                <small>
                  <Copyright />
                  陈熙瑶 郭舒怡 尚阳
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Low%20Temprature%20%20Katerina%2C%20Sabrina%20%26%20Sherry.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/snow.jpg" alt="Snow map preview" />
              </div>
            </a>
            <a
              href="https://umap.openstreetmap.fr/en/map/gis_756551#5/37.020/103.623"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省工伤统计地图 (Work Injury Map)</h3>
                <small>
                  <Copyright />
                  姚婉谊 战云英 易佳莹
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Work%20Injury%20%20Stanley%2C%20Lori%20%26%20Kristin.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/workInjury.png" alt="Work injury map preview" />
              </div>
            </a>
            <a
              href="https://umap.openstreetmap.fr/zh/map/geological-disasters-in-mainland-china_758447#4/39.44/104.15"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省突发地质灾害地图 (Geological Disters Map)</h3>
                <small>
                  <Copyright />
                  孙晓盈 邓忻玥 庞颖彤
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Geological%20disasters%20in%20Mainland%20China.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/geological.jpg" alt="Geological disaster map preview" />
              </div>
            </a>
            <a
              href="https://umap.osm.ch/en/map/map_4637#4/41.44/118.21"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>新中国成立后各省地震数据 (Earthquake Map)</h3>
                <small>
                  <Copyright />
                  周鲲鹏 刘梦蝶 陈九如
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Earthquake%20%20Lebron%2C%20Bonnie%20%26%20Azeal.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/earthquake.png" alt="Earthquake map preview" />
              </div>
            </a>
            <a
              href="https://umap.openstreetmap.fr/en/map/forest-fires-data-map-of-china-2015-2020_753341#4/35.89/104.24"
              passHref
            >
              <div>
                <h3>各省森林火灾地图 (Forest Fire Map)</h3>
                <small>
                  <Copyright />
                  施适雨 黄珏晞 易欣宇
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Forest%20Fires%20%20Peggy%2C%20Cindy%20%26%20jessie.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/forestFire.png" alt="Forest fire map preview" />
              </div>
            </a>
            <a
              href="https://umap.openstreetmap.fr/en/map/untitled-map_758141#4/41.97/106.83"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省洪涝灾害地图 (Floods andd Droughts Map)</h3>
                <small>
                  <Copyright />
                  杨思怡 张芷晴 马玉
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Flood%20and%20Waterlogging%20%20Jade%2C%20Mia%20%26%20Cherry.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/floodsAndDroughts.png" alt="Floods and droughts map preview" />
              </div>
            </a>
            <a
              href="http://umap.openstreetmap.fr/en/map/traffic-accidents_756060#4/40.38/107.58"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3>各省交通事故地图 (Traffic Accidents Map)</h3>
                <small>
                  <Copyright />
                  朱诗琪 李昕玥 苗诗扬
                </small>
                <DownloadReport
                  URL={
                    "https://social-ojo-1301796004.cos.ap-guangzhou.myqcloud.com/files/EMPS_Traffic%20Accident%20%20Selina%2C%20Carolyn%20%26%20Julianne.docx"
                  }
                />
                <StaticImage placeholder="blurred" src="../../images/traffic.jpg" alt="Traffic accidents map preview" />
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default MapPage
