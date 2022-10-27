import React from 'react'
import styled from 'styled-components'

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div>
        <b>Thibaud Ritzenthaler</b> - {new Date().getFullYear()}, built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
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