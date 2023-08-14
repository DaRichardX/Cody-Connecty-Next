import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './impact.css'

const Impact = (props) => {
  return (
    <div className="impact-container">
      <Helmet>
        <title>Impact - Code Connect</title>
        <meta property="og:title" content="Impact - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
      <div className="impact-banner">
        <h2 className="impact-text">
          <br></br>
          <span>
            As of 2023, Code Connect has helped more than 100 students for more
            than 200 hours of learning across Vancouver
          </span>
          <br className="impact-text3"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
      </div>
      <div className="impact-container1">
        <span className="impact-text5">
          If you&apos;re looking to donate or support us, please email us at:
          donate@codeconnect.ca
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Impact
