import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const blogTemplate = (props) => {
    return (
        <Layout>
            <div className="content">
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>           
            </div>
        </Layout>
    )
}

export default blogTemplate