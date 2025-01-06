import React from 'react'
import styled from 'styled-components'

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div>
      <b>Thibaud Ritzenthaler</b> - {new Date().getFullYear()} - picture by <b><a href="https://unkadth.myportfolio.com/">Chloé Garcia</a></b> - built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <div></div>
    </footer>
  )
}

export default styled(Footer)`
  footer {
    display: flex;
    justify-content: center;
  }
`