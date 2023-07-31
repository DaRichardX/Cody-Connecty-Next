import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import FeatureCard4 from '../components/feature-card4'
import Footer from '../components/footer'

const InPersonClasses = (props) => {
  return (
    <>
      <div className="in-person-classes-container">
        <Head>
          <title>In-Person-Classes - Cody Connecty</title>
          <meta
            property="og:title"
            content="In-Person-Classes - Cody Connecty"
          />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name7"></NavBar>
        <div className="in-person-classes-features">
          <h1 className="in-person-classes-text">Our In-person programs</h1>
          <div className="in-person-classes-separator"></div>
          <div className="in-person-classes-container1">
            <div className="in-person-classes-container2">
              <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="in-person-classes-image"
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .in-person-classes-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .in-person-classes-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 6%;
            margin-bottom: 6%;
            flex-direction: column;
          }
          .in-person-classes-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .in-person-classes-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .in-person-classes-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .in-person-classes-container2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .in-person-classes-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            object-position: left;
          }
          @media (max-width: 991px) {
            .in-person-classes-features {
              align-items: center;
            }
            .in-person-classes-container1 {
              flex-direction: column;
            }
            .in-person-classes-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .in-person-classes-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .in-person-classes-text {
              text-align: center;
            }
            .in-person-classes-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .in-person-classes-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .in-person-classes-container2 {
              grid-template-columns: 1fr;
            }
            .in-person-classes-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default InPersonClasses
