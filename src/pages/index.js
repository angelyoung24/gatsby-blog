import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Index = () => {
  return (
    <div>
      <Layout>
        <h1>Hello!</h1>
        <h2>
          I am Angel, a front-end developer from outside of beautiful
          Philadelphia.
        </h2>
        <p>
          Need a Developer? <Link to="/contact">Contact Me</Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default Index
