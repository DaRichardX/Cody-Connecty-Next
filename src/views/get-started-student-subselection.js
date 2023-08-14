import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './get-started-student-subselection.css'

const GetStartedStudentSubselection = (props) => {
  return (
    <div className="get-started-student-subselection-container">
      <Helmet>
        <title>Contact Us - Code Connect</title>
        <meta property="og:title" content="Contact Us - Code Connect" />
      </Helmet>
      <div className="get-started-student-subselection-container1">
        <NavBar rootClassName="nav-bar-root-class-name11"></NavBar>
        <div className="get-started-student-subselection-container2">
          <div className="get-started-student-subselection-hero">
            <div className="get-started-student-subselection-container3">
              <h1 className="get-started-student-subselection-text">
                Gotcha, do you wish to enroll in our online classes or in-person
                classes?
              </h1>
              <div className="get-started-student-subselection-btn-group">
                <Link
                  to="/in-person-classes"
                  className="get-started-student-subselection-navlink button"
                >
                  I wish to learn in-person
                </Link>
                <a
                  href="https://app.formbricks.com/s/cllbbef7i00mpmo0h08yxc49r"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="get-started-student-subselection-link button"
                >
                  I wish to learn online
                </a>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxsZWFybnxlbnwwfHx8fDE2OTIwNDMxMDh8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
              className="get-started-student-subselection-image"
            />
          </div>
          <div className="get-started-student-subselection-banner">
            <h2 className="get-started-student-subselection-text1">
              <span>
                Feeling unsure? Have any questions? Feel free to email us at
                info@codeconnect.ca 
              </span>
              <br className="get-started-student-subselection-text3"></br>
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
        <Footer rootClassName="footer-root-class-name12"></Footer>
      </div>
    </div>
  )
}

export default GetStartedStudentSubselection
