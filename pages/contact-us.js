import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import FeatureCard3 from '../components/feature-card3'
import Footer from '../components/footer'

const ContactUs = (props) => {
  return (
    <>
      <div className="contact-us-container">
        <Head>
          <title>Contact Us - Code Connect</title>
          <meta property="og:title" content="Contact Us - Code Connect" />
        </Head>
        <div className="contact-us-container1">
          <NavBar rootClassName="nav-bar-root-class-name9"></NavBar>
          <div className="contact-us-container2">
            <div className="contact-us-features">
              <h1 className="contact-us-text">
                <span>Contact us @</span>
                <br></br>
              </h1>
              <div className="contact-us-container3">
                <FeatureCard3
                  title="Inquiries"
                  action="info@codeconnct.ca"
                  description="For informations about the program &amp; other"
                  rootClassName="rootClassName"
                ></FeatureCard3>
                <FeatureCard3
                  title="Richard Xie"
                  action="zheyuan@codeconnect.ca"
                  description="President"
                  rootClassName="rootClassName3"
                ></FeatureCard3>
                <FeatureCard3
                  title="Claire Hua"
                  action="claire@codeconnect.ca"
                  description="Vice-President"
                  rootClassName="rootClassName5"
                ></FeatureCard3>
              </div>
            </div>
          </div>
          <Footer rootClassName="footer-root-class-name10"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-us-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-us-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 8%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-us-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .contact-us-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-us-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .contact-us-text {
              text-align: center;
            }
            .contact-us-container3 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .contact-us-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-us-text {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .contact-us-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-us-container3 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContactUs
