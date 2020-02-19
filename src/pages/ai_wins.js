import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AiWins = () => (
  <Layout>
    <SEO title="AI and analytics win" />
    <h1>AI and analytics win</h1>
    <ul>
    <li><a href="https://www.datsciawards.com/blog/what-meaning-analytics-business/#/">Value of Analytics grows</a></li>
    </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AiWins