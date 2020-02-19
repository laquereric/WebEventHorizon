import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>WebEvent Horizon is an opinionated curation of web development news.</h1>
    <h2>Mission</h2>
    <p>Web Event Horizon creates a forum where next-generation web technology can be discussed.</p>
    <h2>Vision</h2>
    <p>WebEvent Horizon is the trusted source for advanced web development news</p>
    <br/>
    <p>My Primary Opinions (Yes... I said it was opinionated):</p>
    <ul>
    <li><Link to="/time_is_power/">Time is power</Link></li>
    <li><Link to="/ai_wins/">AI (and Analytics) win.</Link></li>
    <li><Link to="/web_too_hard/">Web Development is too hard.</Link></li>
   </ul>
    <p></p>
    <p>Previous published work:</p>
    <ul>
    <li><a href="https://info.marklogic.com/defining-data-driven-software-development-oreilly.html?type=PD&publisher=Oreilly">Defining Data Driven Software Development</a></li>
    <li><a href="https://www.researchgate.net/publication/228551985_Proposed_Language_Requirements_for_Object-Oriented_Extensions_to_VHDL">Object-Oriented Hardware Design</a></li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
