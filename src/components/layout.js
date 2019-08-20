import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

export default ({
  data: {
    mdx: { body },
  },
}) => {
  return <MDXRenderer>{body}</MDXRenderer>
}

export const pageQuery = graphql`
  query BlogPostQuery($mdxId: String) {
    mdx(id: { eq: $mdxId }) {
      id
      body
    }
  }
`
