import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import {FaHandsHelping} from 'react-icons/fa'
import SectionTitle from '../sectionTitle'


const Activities = ({className}) => {
  return (
    <div className={className}>
      <SectionTitle
        title="Activitées"
        name="activities"
        icon={<FaHandsHelping size={28}/>}
      />
      <div className="activities__content">
        {siteConfig.activities &&
          siteConfig.activities.map(activity => {
            const imageUrl = withPrefix(activity.image)
            return (
              <div className="activity_item" key={activity.structure.name} onClick={() => {
                activity.link && (window.location.href = activity.link)
              }}>
                <img className="activity_item_image" src={imageUrl} alt={activity.structure.name}/>
                <div className="activity_item_desc">
                  <p>
                    <strong>{activity.structure.name}</strong><br/>
                    <b>{activity.structure.desc}</b><br/>
                    <i>{activity.position}</i>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default styled(Activities)`
  .activities__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .activity_item {
    min-height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    text-align: center;
    box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
  }
  
  .activity_item_image {
    max-height: 100px;
    margin: 10px 10px 0 10px;
  }
  
  .activity_item_desc {
    font-size: 0.8em;
    margin: 0 10px 0 10px;
  }
  
  .activity_item_desc p strong {
    font-size: 1.2em;
  }
  
  .activity_item_desc h4{
    font-size: 0.9em;
  }
  
  
`