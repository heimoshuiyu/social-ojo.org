import * as React from "react"
import Image from "../../components/Image"
import Header from "../../components/Header"
import {StaticImage} from "gatsby-plugin-image"
import * as styles from "../../styles/Post.module.css"
import * as homeStyles from "../../styles/Home.module.css"
import {Link} from "gatsby"
const lawPages = require('../../data/law')

const LawPage = () => {
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
          src="../../images/486.webp"
        />
      } />

      <main className={homeStyles.container}>
        <section className={styles.post}>
          <h2>社会管理法律</h2>
          <small>发布于 2022-07-06</small>
          <hr />
          <div className={styles.grid}>
            {
              lawPages.map((element) => {
                return <Link to={`/posts/law/${element.path}`} style={{
                  textDecoration: "unset", color: "unset",
                }}>
                  <div>
                    <h3>{element.title}<br />{element.titleEn}</h3>
                  </div>
                  <small></small>
                  <Image name={`group${element.path}bg`} alt="test" />
                </Link>
              })
            }
          </div>
        </section>
      </main>

    </>
  )
}

export default LawPage
