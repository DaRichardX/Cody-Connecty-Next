import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GalleryCard1 from '../components/gallery-card1'
import Footer from '../components/footer'
import './sponsors.css'

const Sponsors = (props) => {
  return (
    <div className="sponsors-container">
      <Helmet>
        <title>Contact Us - Code Connect</title>
        <meta property="og:title" content="Contact Us - Code Connect" />
      </Helmet>
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
  )
}

export default Sponsors
