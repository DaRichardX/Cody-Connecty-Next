import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import GalleryCard1 from '../components/gallery-card1'
import Footer from '../components/footer'

const Sponsors = (props) => {
  return (
    <>
      <div className="sponsors-container">
        <Head>
          <title>Contact Us - Code Connect</title>
          <meta property="og:title" content="Contact Us - Code Connect" />
        </Head>
        <div className="sponsors-container1">
          <NavBar rootClassName="nav-bar-root-class-name12"></NavBar>
          <div className="sponsors-container2">
            <h1>2023 Sponsors</h1>
            <div className="sponsors-gallery">
              <GalleryCard1
                title="BLUBC Education"
                subtitle="Code Connect thanks BLUBC Education for providing field expertises and advertisements"
                image_src="/untitled%20design%20(1)-1500h.png"
                rootClassName="rootClassName"
              ></GalleryCard1>
              <GalleryCard1
                title="University Neighbourhoods Association"
                subtitle="Code Connect acknowledges UNA for providing financial support and a location to host our in-person sessions"
                image_src="/untitled%20(1000%20%C3%A3%C2%97%201000%20px)-1500h.png"
                rootClassName="rootClassName1"
              ></GalleryCard1>
              <GalleryCard1
                title="Google for Nonprofits"
                subtitle="Code Connect acknowledges Google Ad Grants for providing Ad Grants to support our advertisement efforts"
                image_src="/unnamed%20(1)-1500h.jpg"
                rootClassName="rootClassName2"
              ></GalleryCard1>
            </div>
          </div>
          <Footer rootClassName="footer-root-class-name13"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .sponsors-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sponsors-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sponsors-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 8%;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .sponsors-gallery {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .sponsors-container2 {
              margin-top: 12%;
            }
            .sponsors-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 991px) {
            .sponsors-gallery {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .sponsors-container2 {
              margin-top: 18%;
              margin-bottom: 12%;
            }
            .sponsors-gallery {
              grid-gap: 10%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .sponsors-container2 {
              margin-top: 30%;
            }
            .sponsors-gallery {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Sponsors
