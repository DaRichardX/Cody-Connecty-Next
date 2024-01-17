import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const GetStarted = (props) => {
  return (
    <>
      <div className="get-started-container">
        <Head>
          <title>Contact Us - Code Connect</title>
          <meta property="og:title" content="Contact Us - Code Connect" />
        </Head>
        <div className="get-started-container1">
          <NavBar rootClassName="nav-bar-root-class-name10"></NavBar>
          <div className="get-started-container2">
            <div className="get-started-hero">
              <div className="get-started-container3">
                <h1 className="get-started-text">I want to..</h1>
                <div className="get-started-btn-group">
                  <Link href="/get-started-student">
                    <a className="get-started-link button">Become a Student</a>
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSciHkGmsOsDlYHS17NHm26ea_up1P6ypE439OIZkossGDe3aA/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="get-started-link1 button"
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
      <style jsx>
        {`
          .get-started-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .get-started-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .get-started-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 8%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .get-started-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .get-started-container3 {
            display: flex;
            align-self: center;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: 6vh;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .get-started-text {
            font-size: 3rem;
            max-width: 450px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .get-started-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .get-started-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .get-started-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .get-started-link1 {
            color: #ffffff;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #000000;
          }
          .get-started-link1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .get-started-image {
            width: 400px;
            object-fit: cover;
          }
          .get-started-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .get-started-text1 {
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          @media (max-width: 991px) {
            .get-started-hero {
              flex-direction: column;
            }
            .get-started-container3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .get-started-text {
              text-align: center;
            }
            .get-started-text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .get-started-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .get-started-image {
              width: 80%;
            }
            .get-started-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .get-started-container2 {
              margin-top: 16%;
            }
            .get-started-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .get-started-container3 {
              margin-top: 4vh;
              margin-bottom: var(--dl-space-space-unit);
            }
            .get-started-btn-group {
              flex-direction: column;
            }
            .get-started-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .get-started-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .get-started-text1 {
              font-weight: 600;
            }
            .get-started-text3 {
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

export default GetStarted
