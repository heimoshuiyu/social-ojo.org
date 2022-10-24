import * as React from "react"
import * as styles from "../styles/Footer.module.css"
import {useStaticQuery, graphql} from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
query {
  siteBuildMetadata {
    buildTime(formatString: "LLLL")
  }
}

  `)
  console.log('data', data)
  const {buildTime} = data.siteBuildMetadata
  return (
    <footer className={styles.footer}>
      <small>
        Website built with Gatsby.js at {buildTime}. ©2022-2023 Social OjO. All Rights Reserved.
      </small>
    </footer>
  )
}

export default Footer
