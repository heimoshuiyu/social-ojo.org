import * as React from "react"
import * as styles from "../styles/Home.module.css"
import ClickForMore from "./ClickForMore"
import {Link} from "gatsby"

const PostPreview = ({title, description, date, href, bg}) => {
  return (
    <Link to={href} style={{color: "unset", textDecoration: "unset"}}>
      <section className={styles.postPreviewWrap}>
        <div className={styles.postPreview}>
          <h2>{title}</h2>
          <p>{description}</p>
          <small>发布于 {date}</small>
          {" | "}
          <ClickForMore />
        </div>
        <div style={{width: "39%", maxWidth: "20rem"}}>
          {bg}
        </div>
      </section>
    </Link>
  )
}

export default PostPreview
