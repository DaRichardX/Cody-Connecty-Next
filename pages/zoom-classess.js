import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import ClassCard from '../components/class-card'
import Footer from '../components/footer'

const ZoomClassess = (props) => {
  return (
    <>
      <div className="zoom-classess-container">
        <Head>
          <title>Zoom-Classess - Cody Connecty</title>
          <meta property="og:title" content="Zoom-Classess - Cody Connecty" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
        <h1 className="zoom-classess-text">Online Tutoring</h1>
        <div className="zoom-classess-blog">
          <div className="zoom-classess-container1">
            <ClassCard
              label="Join uS"
              title="Volunteer"
              image_src="/photo-1554415707-6e8cfc93fe23-1500w.jpg"
              description="As a volunteer with Code Connect, you will have the chance to cultivate valuable skills such as leadership, communication, and organization. Moreover, you will have the opportunity to form a supportive educational relationship with students, aiding in the development of their self-esteem, confidence, and programming skills."
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName4"
            ></ClassCard>
          </div>
          <div className="zoom-classess-container2">
            <ClassCard
              label="Structure"
              title="Online and Flexible"
              image_src="/photo-1515378791036-0648a3ef77b2-1500w.jpg"
              description="We offer online tutoring that will be held via Zoom. You are allowed to cordinate with your student on your time schedules. You will be mostly working with kids age 8-12, and is responsible teaching them all about programming in a language you prefer."
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName5"
            ></ClassCard>
          </div>
          <ClassCard
            label="PEERS"
            image_src="/423148-1500w.jpg"
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName1"
          ></ClassCard>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSePqnR8F_4G-eSxYQ3KnyGkG0uU5AqDCC81Q5coNgh0h2RaOA/viewform"
            target="_blank"
            rel="noreferrer noopener"
            className="zoom-classess-link button"
          >
            Join us Today!
          </a>
          <Footer rootClassName="footer-root-class-name7"></Footer>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .zoom-classess-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .zoom-classess-text {
            margin-top: 7%;
          }
          .zoom-classess-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 2%;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .zoom-classess-container1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .zoom-classess-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .zoom-classess-link {
            width: 40%;
            height: 10%;
            margin-top: 8%;
            text-align: center;
            transition: 0.3s;
            padding-top: 2%;
            margin-bottom: 8%;
            padding-bottom: 2%;
            text-decoration: none;
          }
          .zoom-classess-link:hover {
            background-color: #c9c9c9;
          }
          @media (max-width: 767px) {
            .zoom-classess-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .zoom-classess-blog {
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

export default ZoomClassess
