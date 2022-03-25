import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'

import Header from '../header'
import Footer from "../footer";
import './layout.css'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header headerLinks={siteConfig.headerLinks} />
    <div>{children}</div>
    <Footer className="footer" />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
