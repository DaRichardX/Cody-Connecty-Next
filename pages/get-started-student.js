import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const GetStartedStudentSubselection = (props) => {
  return (
    <>
      <div className="get-started-student-subselection-container">
        <Head>
          <title>Contact Us - Code Connect</title>
          <meta property="og:title" content="Contact Us - Code Connect" />
        </Head>
        <div className="get-started-student-subselection-container1">
          <NavBar rootClassName="nav-bar-root-class-name11"></NavBar>
          <div className="get-started-student-subselection-container2">
            <div className="get-started-student-subselection-hero">
              <div className="get-started-student-subselection-container3">
                <h1 className="get-started-student-subselection-text">
                  Gotcha, do you wish to enroll in our online classes or
                  in-person classes?
                </h1>
                <div className="get-started-student-subselection-btn-group">
                  <Link href="/in-person-classes">
                    <a className="get-started-student-subselection-link button">
                      I wish to learn in-person
                    </a>
                  </Link>
                  <a
                    href="https://app.formbricks.com/s/cllbbef7i00mpmo0h08yxc49r"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="get-started-student-subselection-link1 button"
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
      <style jsx>
        {`
          .get-started-student-subselection-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .get-started-student-subselection-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .get-started-student-subselection-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 8%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .get-started-student-subselection-hero {
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
          .get-started-student-subselection-container3 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .get-started-student-subselection-text {
            font-size: 3rem;
            max-width: 650px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .get-started-student-subselection-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .get-started-student-subselection-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .get-started-student-subselection-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .get-started-student-subselection-link1 {
            color: rgb(255, 255, 255);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .get-started-student-subselection-link1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .get-started-student-subselection-image {
            width: 400px;
            object-fit: cover;
          }
          .get-started-student-subselection-banner {
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
          .get-started-student-subselection-text1 {
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          @media (max-width: 991px) {
            .get-started-student-subselection-hero {
              flex-direction: column;
            }
            .get-started-student-subselection-container3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .get-started-student-subselection-text {
              text-align: center;
            }
            .get-started-student-subselection-text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .get-started-student-subselection-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .get-started-student-subselection-image {
              width: 80%;
            }
            .get-started-student-subselection-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .get-started-student-subselection-container2 {
              margin-top: 16%;
            }
            .get-started-student-subselection-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .get-started-student-subselection-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .get-started-student-subselection-btn-group {
              flex-direction: column;
            }
            .get-started-student-subselection-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .get-started-student-subselection-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .get-started-student-subselection-text1 {
              font-weight: 600;
            }
            .get-started-student-subselection-text3 {
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

export default GetStartedStudentSubselection
