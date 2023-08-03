import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import GalleryCard1 from '../components/gallery-card1'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Code Connect</title>
          <meta property="og:title" content="Team - Code Connect" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name5"></NavBar>
        <h1 className="team-heading">Our Team</h1>
        <div className="team-gallery">
          <GalleryCard1
            title="Richard Xie"
            subtitle="President and Founder"
            image_alt="Richard Xie"
            image_src="/img_5819%20%5B1%5D-1400w-1500w.jpg"
            rootClassName="rootClassName"
          ></GalleryCard1>
          <GalleryCard1
            title="Claire Hua"
            subtitle="Presedent and Founder"
            image_alt="Claire Hua"
            image_src="/untitled_design_41-1400w-1500w.png"
            rootClassName="rootClassName1"
          ></GalleryCard1>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-heading {
            margin-top: 8%;
          }
          .team-gallery {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 4%;
            margin-bottom: 4%;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .team-gallery {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .team-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .team-gallery {
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

export default Team
