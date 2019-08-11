/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "./style.js"
import ErrorBoundary from "./ErrorBoundary"

const Layout = ({ children }) => (
  <ErrorBoundary>
    <GlobalStyle />
    {children}
  </ErrorBoundary>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
