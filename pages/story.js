import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Story = (props) => {
  return (
    <>
      <div className="story-container">
        <Head>
          <title>Our Story - Code Connect</title>
          <meta property="og:title" content="Our Story - Code Connect" />
        </Head>
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
              <span>
                Code Connect was founded by two University Hill Secondary
                students, Richard and Claire, in the december of 2021. They saw
                the insufficiency in free online education and had the vision to
                help in alleviating this issue. What started out as a simple
                idea quickly blossomed into a great and meaningful project to
                give back to the community.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Slowly, Richard and Claire began to build the foundations of
                this program. Claire talked to Wesbrook UNA and worked out a
                partnership to official launch this program. Initially, Code
                Connect started with a very small group of tutors and students
                but has steadily grown since then. We hope to improve alongside
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="story-text06">YOUR</span>
              <span>
                {' '}
                support, to better the program and provide the optimal
                experience for students. In the future, we hope to continue
                spreading our interest in Computer Science.
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
      <style jsx>
        {`
          .story-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .story-container1 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .story-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 6%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .story-image {
            width: 25rem;
            object-fit: cover;
            margin-right: 1%;
          }
          .story-container2 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .story-text {
            font-size: 3rem;
            margin-bottom: 2%;
          }
          .story-separator {
            width: 20%;
            height: 2px;
            margin-top: 1%;
            margin-bottom: 1%;
            background-color: var(--dl-color-gray-500);
          }
          .story-text01 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .story-text06 {
            font-style: normal;
            font-weight: 600;
          }
          .story-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .story-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .story-button:hover {
            transform: scale(1.02);
          }
          .story-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .story-button1:hover {
            transform: scale(1.02);
          }
          .story-text11:hover {
            transform: scale(1.02);
          }
          @media (max-width: 991px) {
            .story-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .story-image {
              order: 2;
            }
            .story-container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .story-text {
              text-align: center;
            }
            .story-text01 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .story-hero {
              margin-top: 14%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .story-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .story-hero {
              margin-top: 14%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .story-container2 {
              margin-top: 8%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .story-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .story-btn-group {
              flex-direction: column;
            }
            .story-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .story-text11 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Story
