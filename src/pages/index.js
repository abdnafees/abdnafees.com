import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Turing Guy"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Abdullah Nafees"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `netlify-cms`]}
        />
        <img style={{ margin: 0 }} src="./poetraiture.jpg" alt="A picture..." />
        <h1>
          Hey, I'm Abdullah{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="35px" >My Blog</Button>
        </Link>
        <p>
          I am a computer scientist and engineer working as a Systems Engineer at a
          health tech company in Lahore, Pakistan. And, have conversations with cool people on a weekly podcast called <a href="https://anchor.fm/makerbaithak">Baithak</a>.
          You can connect with me on <a href="https://www.linkedin.com/in/abdnafees/">LinkedIn</a> for regular updates about my work.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
