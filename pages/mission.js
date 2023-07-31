import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Mission = (props) => {
  return (
    <>
      <div className="mission-container">
        <Head>
          <title>Mission - Cody Connecty</title>
          <meta property="og:title" content="Mission - Cody Connecty" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
        <h1 className="mission-text">
          <span>Our Mission</span>
          <br></br>
        </h1>
        <div className="mission-hero">
          <div className="mission-container1 animate__fadeInLeft animate__animated">
            <h1 className="mission-text03">1.</h1>
            <h2 className="mission-text04">Extracurricular Intrest</h2>
            <span className="mission-text05">
              <span>
                To provide free extracurricular tutoring through tutoring STEM
                to elementary/highschool children who are exploring different
                fields;
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="mission-hero1">
          <div className="mission-container2 animate__fadeInRight animate__animated">
            <h1 className="mission-text08">2.</h1>
            <h2 className="mission-text09">Volunteer Opportunities</h2>
            <span className="mission-text10">
              <br></br>
              <br></br>
              <span>
                To provide teens a meaningful and rewarding volunteer experience
                with an opportunity to act as a role model to children and
                develop leadership and communication skills
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
        <div className="mission-hero2">
          <div className="mission-container3 animate__fadeInLeft animate__animated">
            <h1 className="mission-text16">3.</h1>
            <h2 className="mission-text17">Equal Opportunities</h2>
            <span className="mission-text18">
              <span>
                To provide equal opportunities for learning regardless of
                financial, geological, or socioeconomic status.
              </span>
              <br></br>
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
          .mission-text {
            margin-top: 10%;
          }
          .mission-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
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
          .mission-text03 {
            font-size: 3rem;
            max-width: 450px;
          }
          .mission-text04 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text05 {
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
          .mission-text08 {
            font-size: 3rem;
          }
          .mission-text09 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text10 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .mission-hero2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: auto;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }

          .mission-container3 {
            display: flex;
            margin-left: 0px;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .mission-text16 {
            font-size: 3rem;
            max-width: 450px;
          }
          .mission-text17 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text18 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .mission-hero {
              height: auto;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-text03 {
              font-size: 3rem;
            }
            .mission-text04 {
              font-weight: 600;
            }
            .mission-hero1 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-text08 {
              font-size: 3rem;
            }
            .mission-text09 {
              font-weight: 600;
            }
            .mission-hero2 {
              height: auto;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-text16 {
              font-size: 3rem;
            }
            .mission-text17 {
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
            .mission-text03 {
              text-align: center;
            }
            .mission-text04 {
              text-align: center;
            }
            .mission-text05 {
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
            .mission-text08 {
              text-align: center;
            }
            .mission-text09 {
              text-align: center;
            }
            .mission-text10 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .mission-hero2 {
              flex-direction: column;
            }
            .mission-container3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .mission-text16 {
              text-align: center;
            }
            .mission-text17 {
              text-align: center;
            }
            .mission-text18 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .mission-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-text05 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .mission-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-text18 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
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
            .mission-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .mission-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .mission-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Mission
