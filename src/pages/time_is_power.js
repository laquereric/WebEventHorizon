import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TimeIsPower = () => (
  <Layout>
    <SEO title="Time is power" />
    <h1>Time is Power</h1>
    <ul>
    <li><a href="https://www.machmetrics.com/speed-blog/how-does-page-load-time-affect-your-site-revenue/">1 second delay means a 7% reduction in conversions</a></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TimeIsPower
