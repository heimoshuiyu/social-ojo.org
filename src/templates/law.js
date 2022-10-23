import * as React from "react"
import Header from "../components/Header"
import {StaticImage} from "gatsby-plugin-image"
import * as style from "../styles/Post.module.css"
import * as homeStyle from "../styles/Home.module.css"

const LawPage = (props) => {
  const {pageContext} = props
  const {element} = pageContext
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

      <main className={homeStyle.container}>
        <section className={style.post}>
          <h2>{element.title}<br />{element.titleEn}</h2>
          <small>发布于 {element.date}</small>
          <hr />
          {element.videos.map((video) => {
            const poster = video.substr(0, video.indexOf('.mp4')) + '_poster.jpg';
            return <p style={{textAlign: "center"}}>
              <video src={video} poster={poster || ""} controls preload="none" width="70%" />
            </p>
          })
          }
        </section>
      </main>

    </>
  )
}

export default LawPage
