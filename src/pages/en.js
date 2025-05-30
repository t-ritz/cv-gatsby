import * as React from "react"
import styled from 'styled-components'
import {Container, Row, Col} from 'react-awesome-styled-grid'
import {StaticImage} from "gatsby-plugin-image"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFileDownload,
  FaOrcid,
} from 'react-icons/fa'
import siteConfig from '../../data/siteConfigEn'


import {
  Layout,
  Hero,
  SearchEngineOptimization,
  Wrapper,
  About,
  Timeline,
  Education,
  Hobbies,
  Publications,
  Activities,
  Expertise,
} from '../components'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    const title = siteConfig.siteTitle
    const {keywords} = siteConfig.siteDescription
    return (
      <div className={this.props.className}>
        <Layout headerLinks={siteConfig.headerLinks} location={this.props.location} >
          <SearchEngineOptimization title={title} keywords={keywords}/>

          <Hero heroImg={siteConfig.siteCover} title={title}/>

          <Wrapper className={this.props.className}>
            <Container className="page-content" fluid>
              <Row>
                <Col xs={4} className="avatar">
                  <StaticImage
                    className="avatar__image"
                    src="../images/avatar.png"
                    alt="user avatar"
                  />
                  <div className="social">
                    {siteConfig.social.github && (
                      <a
                        className="social-link github"
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="social-icon" size="32"/>
                      </a>
                    )}
                    {siteConfig.social.linkedin && (
                      <a
                        className="social-link linkedin"
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="social-icon" size="32"/>
                      </a>
                    )}
                    {siteConfig.social.orcid && (
                      <a
                        className="social-link orcid"
                        href={siteConfig.social.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaOrcid className="social-icon" size="32"/>
                      </a>
                    )}
                    {siteConfig.social.email && (
                      <a
                        className="social-link email"
                        href={`mailto:${siteConfig.social.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope className="social-icon" size="32"/>
                      </a>
                    )}
                    {siteConfig.resume && (
                      <a
                        className="social-link resume"
                        href={`${siteConfig.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFileDownload className="social-icon" size="28"/>
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={4}>
                  <About title="About" siteConfig={siteConfig}/>
                </Col>
                <Col xs={4} sm={4}>
                  <Expertise title="Expertise" siteConfig={siteConfig}/>
                </Col>
              </Row>
              <Separator/>
              <Timeline title="Experience" siteConfig={siteConfig}/>
              {/* <Separator />
              <Repositories />*/}
              <Separator/>
              <Education title="Education" siteConfig={siteConfig}/>
              <Separator />
              <Publications />
              {/*<Activities title="Activity" siteConfig={siteConfig}/>
              <Separator/>
                <Hobbies/>*/}
            </Container>
          </Wrapper>
        </Layout>
      </div>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

    a.social-link.orcid:hover {
    color: #a5cd39;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  a.social-link.resume:hover {
    color: #40c22b;
  }
`
