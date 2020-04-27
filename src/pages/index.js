import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import '../styles/index.scss'

const Index = () => {
  return (
    <div>
      <Layout>
       <div className="content">
        <h1>Hello!</h1>
        <h2>
          I am Angel, a front-end developer from outside of beautiful
          Philadelphia.
        </h2>
        <p>
          Need a Developer? <Link to="/contact">Contact Me</Link>
        </p>
        </div>
      </Layout>
    </div>
  )
}

export default Index
