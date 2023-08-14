import React from 'react'
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
                <h1 className="get-started-text">I am a...</h1>
                <div className="get-started-btn-group">
                  <button className="get-started-button button">Student</button>
                  <button className="get-started-button1 button">
                    Volunteer
                  </button>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="get-started-image"
              />
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
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .get-started-container3 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .get-started-text {
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .get-started-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .get-started-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .get-started-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .get-started-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #d0cbcb;
          }
          .get-started-button1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .get-started-image {
            width: 400px;
            object-fit: cover;
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
          }
          @media (max-width: 767px) {
            .get-started-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .get-started-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .get-started-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .get-started-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .get-started-btn-group {
              flex-direction: column;
            }
            .get-started-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default GetStarted
