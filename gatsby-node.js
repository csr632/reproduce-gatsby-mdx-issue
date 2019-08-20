const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve("./src/components/Layout.js"),
            context: {
              mdxId: node.id,
            },
          })
        })
      })
    )
  })
}
