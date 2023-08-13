import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Mission = (props) => {
  return (
    <>
      <div className="mission-container">
        <Head>
          <title>Mission - Code Connect</title>
          <meta property="og:title" content="Mission - Code Connect" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
        <div className="mission-hero">
          <div className="mission-container1 animate__fadeInLeft animate__animated">
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
                provide access to quality coding education that equips young
                minds with the tools they need to succeed in a rapidly changing
                world. By nurturing curiosity, creativity, and critical
                thinking, we aspire to unlock endless opportunities for these
                young learners, which enable them to shape their futures and
                contribute positively to society.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="mission-hero1">
          <div className="mission-container2 animate__fadeInRight animate__animated">
            <h1 className="mission-text07">Our Vision</h1>
            <h2 className="mission-text08">
              Confidence, skills, and knowledge
            </h2>
            <span className="mission-text09">
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
      <style jsx>
        {`
          .mission-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mission-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 6%;
            min-height: auto;
            transition: 0.3s;
            flex-direction: column;
            justify-content: center;
          }

          .mission-container1 {
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            margin-left: 0px;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .mission-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .mission-text03 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text04 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .mission-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .mission-container2 {
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            margin-left: 0px;
            flex-direction: column;
          }
          .mission-text07 {
            font-size: 3rem;
          }
          .mission-text08 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text09 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          @media (max-width: 1200px) {
            .mission-hero {
              height: auto;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-text {
              font-size: 3rem;
            }
            .mission-text03 {
              font-weight: 600;
            }
            .mission-hero1 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-text07 {
              font-size: 3rem;
            }
            .mission-text08 {
              font-weight: 600;
            }
          }
          @media (max-width: 991px) {
            .mission-hero {
              flex-direction: column;
            }
            .mission-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .mission-text {
              text-align: center;
            }
            .mission-text03 {
              text-align: center;
            }
            .mission-text04 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .mission-hero1 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .mission-container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mission-text07 {
              text-align: center;
            }
            .mission-text08 {
              text-align: center;
            }
            .mission-text09 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .mission-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-text {
              font-size: 3rem;
            }
            .mission-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .mission-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .mission-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .mission-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .mission-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .mission-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .mission-text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Mission
