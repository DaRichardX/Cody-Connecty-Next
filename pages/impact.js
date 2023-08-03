import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Impact = (props) => {
  return (
    <>
      <div className="impact-container">
        <Head>
          <title>Impact - Code Connect</title>
          <meta property="og:title" content="Impact - Code Connect" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
        <div className="impact-banner">
          <h2 className="impact-text">
            <br></br>
            <span>
              As of 2023, Code Connect has helped more than 40 students for more
              than 160 hours of learning across Vancouver
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
      <style jsx>
        {`
          .impact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .impact-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: 10%;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: linear-gradient(
                180deg,
                rgb(254, 172, 94) 0%,
                rgb(199, 121, 208) 50%,
                rgba(75, 192, 200, 0) 100%
              ),
              url('/423148-1500w.jpg');
            background-position: left;
          }
          .impact-text {
            color: rgb(255, 255, 255);
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .impact-text3 {
            font-weight: 600;
          }
          .impact-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .impact-text5 {
            align-self: center;
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .impact-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .impact-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .impact-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Impact
