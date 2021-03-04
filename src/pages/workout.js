import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../styles/theme'

import SEO from '../components/seo'
import FormHeader from '../components/formHeader'
import FittyForm from '../components/fittyForm'

const WorkoutPage = () => (
  <ThemeProvider theme={theme}>
    <SEO title='workout' />
    <FormHeader />
    <FittyForm />
  </ThemeProvider>
)

export default WorkoutPage