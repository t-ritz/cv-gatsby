import React, { Fragment } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import SectionTitle from '../sectionTitle'

export default ({ title = 'about', siteConfig = '' }) => {
  return (
    <Fragment>
      <SectionTitle title={title} name="about" icon={<FaUserAlt size={28} />} />
      <p dangerouslySetInnerHTML={{ __html: siteConfig.authorDescription }} />
    </Fragment>
  )
}
