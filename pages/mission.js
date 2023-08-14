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
                provide access to quality coding education that equips young
                minds with the tools they need to succeed in a rapidly changing
                world. By nurturing curiosity, creativity, and critical
                thinking, we aspire to unlock endless opportunities for these
                young learners, which enable them to shape their futures and
                contribute positively to society.
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
            flex-direction: row;
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
          .mission-image {
            width: 989px;
            height: 490px;
            object-fit: cover;
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
          .mission-image1 {
            width: 604px;
            height: 434px;
            object-fit: cover;
          }
          .mission-container2 {
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-threeunits);
            align-items: stretch;
            margin-left: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .mission-text08 {
            font-size: 3rem;
          }
          .mission-text11 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .mission-text12 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          @media (max-width: 1200px) {
            .mission-hero {
              width: 100%;
              height: 495px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-container1 {
              width: 1052px;
              height: 387px;
            }
            .mission-text {
              font-size: 3rem;
            }
            .mission-text03 {
              font-weight: 600;
            }
            .mission-image {
              width: 337px;
              height: 482px;
            }
            .mission-hero1 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .mission-image1 {
              width: 301px;
              height: 463px;
            }
            .mission-text08 {
              font-size: 3rem;
              margin-left: 0px;
            }
            .mission-text11 {
              font-weight: 600;
            }
          }
          @media (max-width: 991px) {
            .mission-hero {
              flex-direction: column;
            }
            .mission-container1 {
              width: 100%;
              margin-top: 50%;
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
            .mission-image1 {
              width: 352px;
              margin-left: 65%;
              margin-right: var(--dl-space-space-threeunits);
            }
            .mission-container2 {
              width: 100%;
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mission-text08 {
              text-align: center;
            }
            .mission-text11 {
              text-align: center;
            }
            .mission-text12 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .mission-hero {
              margin-top: 30%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-container1 {
              width: 100%;
              height: 100%;
              margin-top: 60%;
            }
            .mission-text {
              font-size: 3rem;
            }
            .mission-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .mission-image {
              margin-right: var(--dl-space-space-fiveunits);
            }
            .mission-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mission-image1 {
              align-self: flex-end;
              margin-top: 40%;
              border-color: rgba(0, 0, 0, 0);
            }
          }
          @media (max-width: 479px) {
            .mission-hero {
              height: auto;
              margin-top: 10%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 10%;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .mission-container1 {
              height: auto;
              margin-top: 0px;
            }
            .mission-text {
              font-size: 3rem;
            }
            .mission-image {
              width: 100%;
              align-self: center;
              margin-right: 0px;
            }
            .mission-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .mission-image1 {
              width: 100%;
              height: auto;
              margin-top: -8%;
              margin-left: 80%;
              border-color: rgba(0, 0, 0, 0);
              border-width: 10%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
              padding-right: 0px;
            }
            .mission-container2 {
              padding-left: 0px;
            }
            .mission-text12 {
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
