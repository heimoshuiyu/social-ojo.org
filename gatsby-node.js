exports.createPages = ({actions}) => {
  const lawPages = require('./src/data/law')
  const {createPage} = actions
  lawPages.forEach(element => {
    createPage({
      path: `/posts/law/${element.path}`,
      component: require.resolve("./src/templates/law.js"),
      context: {
        element,
      }
    })
  })
}
