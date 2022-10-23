import * as React from "react"
import * as styles from "../styles/Header.module.css"
import {Link} from "gatsby"

const Header = ({titleText, Background}) => {
  return (
    <header>
      <div style={{display: "grid"}}>
        {Background}
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          <nav className={styles.toolbar} style={{zIndex: "2"}}>
            <strong>
              <Link to="/" style={{textDecoration: "none"}}>Social OjO</Link>
            </strong>
            <div className={styles.nav}>
              <span><Link to="/" style={{textDecoration: "none"}}>主页</Link></span>
              <span><Link to="/posts/init" style={{textDecoration: "none"}}>关于</Link></span>
            </div>
          </nav>
        </div>
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
          }}
        >
          <h1 className={styles.title}>{titleText || "Social OjO"}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
