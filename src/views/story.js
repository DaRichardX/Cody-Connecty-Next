import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './story.css'

const Story = (props) => {
  return (
    <div className="story-container">
      <Helmet>
        <title>Our Story - Code Connect</title>
        <meta property="og:title" content="Our Story - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
      <div className="story-container1"></div>
      <div className="story-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1682685797229-b2930538da47?ixid=M3w5MTMyMXwxfDF8YWxsfDZ8fHx8fHwyfHwxNjkxMDIwOTg1fA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="story-image"
        />
        <div className="story-container2">
          <h1 className="story-text">Our Story</h1>
          <div className="story-separator"></div>
          <span className="story-text01">
            <span className="story-text02">
              Code Connect was founded by two University Hill Secondary
              students, Richard and Claire, in the december of 2021. They saw
              the insufficiency in free online education and had the vision to
              help in alleviating this issue. What started out as a simple idea
              quickly blossomed into a great and meaningful project to give back
              to the community.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="story-text03"></br>
            <br className="story-text04"></br>
            <span className="story-text05">
              Slowly, Richard and Claire began to build the foundations of this
              program. Claire talked to Wesbrook UNA and worked out a
              partnership to official launch this program. Initially, Code
              Connect started with a very small group of tutors and students but
              has steadily grown since then. We hope to improve alongside
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="story-text06">YOUR</span>
            <span className="story-text07">
              {' '}
              support, to better the program and provide the optimal experience
              for students. In the future, we hope to continue spreading our
              interest in Computer Science.
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
          <div className="story-btn-group">
            <button className="story-button button">
              I want to be a student
            </button>
            <button className="story-button1 button">
              <span>
                <span className="story-text11">I want to be a tutor</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Story
