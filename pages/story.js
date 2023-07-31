import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Story = (props) => {
  return (
    <>
      <div className="story-container">
        <Head>
          <title>Story - Cody Connecty</title>
          <meta property="og:title" content="Story - Cody Connecty" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
        <div className="story-container1">
          <div className="story-container2">
            <h1>Our Story</h1>
            <div className="story-container3">
              <img
                alt="image"
                src="/img_4492_1-200h.jpeg"
                className="story-image"
              />
              <span className="story-text1">
                <span>
                  Code Connect was founded by two University Hill Secondary
                  students, Richard and Claire, in the december of 2021. They
                  saw the insufficiency in free online education and had the
                  vision to help in alleviating this issue.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  What started out as a simple idea quickly blossomed into a
                  great and meaningful project to give back to the community.
                  Slowly, Kevin and Hanson began to build the foundations of
                  this program. Claire talked to Wesbrook UNA and worked out a
                  partnership to official launch this program. Initially, Code
                  Connect started with a very small group of tutors and students
                  but has steadily grown since then. We hope to improve
                  alongside YOUR support, to better the program and provide the
                  optimal experience for your child. In the future, we hope to
                  continue spreading our interest in Computer Science.
                </span>
              </span>
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
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .story-container2 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-self: center;
            margin-top: 7%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .story-container3 {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            margin-top: 3%;
            align-items: center;
            margin-bottom: 3%;
            flex-direction: row;
            justify-content: space-between;
          }
          .story-image {
            width: 45%;
            object-fit: cover;
          }
          .story-text1 {
            width: 45%;
            align-self: center;
            margin-top: 0px;
          }
        `}
      </style>
    </>
  )
}

export default Story
