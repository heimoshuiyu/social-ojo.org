import * as React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {useStaticQuery, graphql} from "gatsby"

const Image = ({name}) => {
  const { images: { edges: images } } = useStaticQuery(graphql`
query {
  images: allFile(filter: {relativeDirectory: {eq: "images"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, jpgOptions: {}, quality: 90)
        }
        name
      }
    }
  }
}
  `)
  const propName = name
  const imageData = images.find(({node: {name}}) => name === propName)
  const image = getImage(imageData.node)
	return (
    <GatsbyImage image={image} />
	)
}

export default Image
