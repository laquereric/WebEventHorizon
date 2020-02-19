import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WebTooHard = () => (
  <Layout>
    <SEO title="Web development is too hard" />
    <h1>Web development is too hard</h1>
    <ul>
    <li><a href="https://www.netlify.com/blog/2018/08/14/announcing-netlify-drop-the-simplicity-of-bitballoon-with-the-added-power-of-netlify/">Drag'n'drop to the web</a></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WebTooHard