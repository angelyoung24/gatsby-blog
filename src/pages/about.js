import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => {
  return (
    <div>
      <Layout>
      <div className="content">
        <h1>About Me</h1>
        <p>
          Posts will show up here. To contact me go{" "}
          <Link to="/contact">here</Link>
        </p>
        </div>
      </Layout>
    </div>
  )
}

export default About
