import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "../components/Image"
import {GatsbyImage} from "gatsby-plugin-image"
import {Link} from "gatsby"
import * as style from "../styles/Post.module.css"
import * as homeStyle from "../styles/Home.module.css"

const LawPage = (props) => {
  const {pageContext} = props
  const {element} = pageContext
  return (
    <>
      <Header Background={
        <GatsbyImage placeholder="blurred"
          style={{
            gridArea: "1/1",
            maxHeight: "50vh",
          }}
          layout="fullWidth"
          alt="header background"
          image={Image(`group${element.path}bg`)}
        />
      } />

      <main className={homeStyle.container}>
        <section className={style.post}>
          <Link to="../"><h3>{"<<"}返回目录</h3></Link>
          <h2>{element.title}<br />{element.titleEn}</h2>
          <small>{element.date}</small>
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

      <Footer />
    </>
  )
}

export default LawPage
