import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
      <div className="content">
        <h1>My blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
          </div>
      </Layout>
    </div>
  )
}

export default Blog