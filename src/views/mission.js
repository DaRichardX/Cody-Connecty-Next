import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './mission.css'

const Mission = (props) => {
  return (
    <div className="mission-container">
      <Helmet>
        <title>Mission - Code Connect</title>
        <meta property="og:title" content="Mission - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
      <div className="mission-hero animate__fadeInDown animate__animated">
        <div className="mission-container1 animate__fadeInDown animate__animated">
          <h1 className="mission-text">
            <br></br>
            <span>Our Mission</span>
          </h1>
          <h2 className="mission-text03">Empowerment</h2>
          <span className="mission-text04">
            <span>
              Code Connect is dedicated to empowering children in adverse
              circumstances with coding skills and fostering a passion for
              technology. Our mission is to bridge the digital divide and
              provide access to quality coding education that equips young minds
              with the tools they need to succeed in a rapidly changing world.
              By nurturing curiosity, creativity, and critical thinking, we
              aspire to unlock endless opportunities for these young learners,
              which enable them to shape their futures and contribute positively
              to society.
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxraWRzfGVufDB8fHx8MTY5MTk2NzYwOHww&amp;ixlib=rb-4.0.3&amp;w=1400"
          className="mission-image"
        />
      </div>
      <div className="mission-hero1 animate__fadeInDown animate__animated">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixid=M3w5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNjkxOTY1ODQ0fA&amp;ixlib=rb-4.0.3&amp;w=1400"
          className="mission-image1"
        />
        <div className="mission-container2 animate__fadeInDown animate__animated">
          <h1 className="mission-text08">
            <br></br>
            <span>Our Vision</span>
          </h1>
          <h2 className="mission-text11">Bridging the digital divide</h2>
          <span className="mission-text12">
            <br></br>
            <br></br>
            <span>
              Our vision is a world where everyone, regardless of their innate
              circumstances, has the opportunity to learn and thrive through
              coding education. Code Connect envisions a future where children
              from underserved communities are equipped with the confidence,
              skills, and knowledge to navigate the digital landscape, pursue
              rewarding careers in technology, and become catalysts for change
              in their communities.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Mission
