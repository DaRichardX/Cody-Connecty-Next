import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './get-started.css'

const GetStarted = (props) => {
  return (
    <div className="get-started-container">
      <Helmet>
        <title>Contact Us - Code Connect</title>
        <meta property="og:title" content="Contact Us - Code Connect" />
      </Helmet>
      <div className="get-started-container1">
        <NavBar rootClassName="nav-bar-root-class-name10"></NavBar>
        <div className="get-started-container2">
          <div className="get-started-hero">
            <div className="get-started-container3">
              <h1 className="get-started-text">I want to..</h1>
              <div className="get-started-btn-group">
                <Link
                  to="/get-started-student"
                  className="get-started-navlink button"
                >
                  Become a Student
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSciHkGmsOsDlYHS17NHm26ea_up1P6ypE439OIZkossGDe3aA/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="get-started-link button"
                >
                  Volunteer with Us
                </a>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxsZWFybnxlbnwwfHx8fDE2OTIwNDMxMDh8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="get-started-image"
            />
          </div>
          <div className="get-started-banner">
            <h2 className="get-started-text1">
              <span>
                Feeling unsure? Have any questions? Feel free to email us at
                info@codeconnect.ca 
              </span>
              <br className="get-started-text3"></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </div>
    </div>
  )
}

export default GetStarted
