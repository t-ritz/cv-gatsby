import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Footer from "../footer";
import './layout.css'

const Layout = ({ headerLinks, location, children }) => (
  <React.Fragment>
    <Header headerLinks={headerLinks} location={location} />
    <div>{children}</div>
    <Footer className="footer" />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
