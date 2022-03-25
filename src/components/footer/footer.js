import React, {useState} from 'react'
import styled from 'styled-components'
import {FaHome, FaBars} from 'react-icons/fa'
import {Link, animateScroll as scroll} from 'react-scroll'
import siteConfig from '../../../data/siteConfig'

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div>
        <b>Thibaud Ritzenthaler</b> - {new Date().getFullYear()}, built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        , hosted by
        {` `}
        <a href="https://github.com/thibaud-ritzenthaler/cv-gatsby">Github</a>
      </div>
    </footer>
  )
}

export default styled(Footer)`
  footer {
    display: flex;
    justify-content: center;
  }
`