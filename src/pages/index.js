import * as React from "react"
import * as styles from "../styles/Home.module.css"
import {StaticImage} from "gatsby-plugin-image"
import Header from "../components/Header"
import PostPreview from "../components/PostPreview"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Header Background={
        <StaticImage placeholder="blurred"
          style={{
            gridArea: "1/1",
            maxHeight: "50vh",
          }}
          layout="fullWidth"
          alt="header background"
          src="../images/mainbg.webp"
        />
      } />

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
          title="社会管理法律 (Social Management Law)"
          description="小组研讨真实法律案件的案情和判决 Groups discuss facts and verdicts of real regal cases"
          date="2022-07-06"
          bg={
            <StaticImage placeholder="blurred" src="../images/486.webp" alt="486 conferences photo" />
          }
        />
        <hr />
        <PostPreview
          href="/posts/map"
          title="全国灾害统计地图 (Disasters Map of China)"
          description=""
          date="2022-05-12"
          bg={
            <StaticImage placeholder="blurred" src="../images/typhoon.png" alt="Typhonon map preview" />
          }
        />
      </main>

      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
