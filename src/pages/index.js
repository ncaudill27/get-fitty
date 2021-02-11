import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../components/welcome'
import WorkoutList from '../components/workoutList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <WorkoutList />
  </Layout>
)

export default IndexPage
