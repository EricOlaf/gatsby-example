import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Zoom from 'react-reveal/Zoom';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Zoom>
    <h1>Nexrage</h1>
    </Zoom>
    <p>This is gonna get crazy...</p>
    <p>Here we go!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
