import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from '@material-ui/core/styles'

import Navbar from './navbar'

import { theme } from '../styles/theme'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <Navbar />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout