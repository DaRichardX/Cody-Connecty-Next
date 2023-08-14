import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>404 - Code Connect</title>
        <meta property="og:title" content="404 - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
      <div className="page-container1">
        <h1 className="page-text">
          <span>Page not found :( 404</span>
          <br></br>
        </h1>
        <span className="page-text03">
          <span>
            We couldn&apos;t find the page you were looking for. This is either
            because:
          </span>
          <br></br>
          <br></br>
          <span>
            - There is an error in the URL entered into your web browser. Please
            check the URL and try again.
          </span>
          <br></br>
          <br></br>
          <span>- The page you are looking for has been moved or deleted.</span>
        </span>
        <Link to="/" className="page-navlink">
          <h1 className="page-text11">
            <span>Return to homepage</span>
            <br></br>
          </h1>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Page
