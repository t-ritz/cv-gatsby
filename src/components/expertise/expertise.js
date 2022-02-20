import React from 'react'
import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'
import SectionTitle from '../sectionTitle'
import siteConfig from '../../../data/siteConfig'

const Expertise = ({ className }) => {
  return (
    <div className={className}>
      <SectionTitle
        title="Compétences"
        name="expertise"
        icon={<FaCode size={28} />}
      />
      <div className="expertise__content">
        {siteConfig.expertise &&
          siteConfig.expertise.map(expertise => {
            const icon = require('react-icons/fa')[expertise.icon]
            return (
              <div className="expertise_item" key={expertise.name}>
                {React.createElement(icon, { size: 32 })}
                <span>{expertise.name}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default styled(Expertise)`
  .expertise__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    flex-flow: column wrap;
  }
  .expertise_item {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    text-align: center;
    box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`
