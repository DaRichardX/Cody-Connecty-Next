import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import ClassCard from '../components/class-card'
import Footer from '../components/footer'

const Workshop = (props) => {
  return (
    <>
      <div className="workshop-container">
        <Head>
          <title>Workshops - Code Connect</title>
          <meta property="og:title" content="Workshops - Code Connect" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name8"></NavBar>
        <div className="workshop-container1">
          <h1>Workshops</h1>
          <div className="workshop-blog">
            <div className="workshop-container2">
              <ClassCard
                label="DISCOVER THE FUTURE OF AI"
                title="Artificial Intelligence, ChatGPT, and the future"
                image_src="/photo-1554415707-6e8cfc93fe23-1500w.jpg"
                description="As a volunteer with Code Connect, you will have the chance to cultivate valuable skills such as leadership, communication, and organization. Moreover, you will have the opportunity to form a supportive educational relationship with students, aiding in the development of their self-esteem, confidence, and programming skills."
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName7"
              ></ClassCard>
            </div>
            <div className="workshop-container3">
              <ClassCard
                label="PROGRAMMING"
                title="Introduction to the computer world"
                image_src="/photo-1515378791036-0648a3ef77b2-1500w.jpg"
                description="We offer online tutoring that will be held via Zoom. You are allowed to cordinate with your student on your time schedules. You will be mostly working with kids age 8-12, and is responsible teaching them all about programming in a language you prefer."
                profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName8"
              ></ClassCard>
            </div>
            <ClassCard
              label="PEERS"
              title="Online identity and information safety"
              image_src="/423148-1500w.jpg"
              profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName6"
            ></ClassCard>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSePqnR8F_4G-eSxYQ3KnyGkG0uU5AqDCC81Q5coNgh0h2RaOA/viewform"
              target="_blank"
              rel="noreferrer noopener"
              className="workshop-link button"
            >
              Sign up here!
            </a>
            <Footer rootClassName="footer-root-class-name9"></Footer>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
      <style jsx>
        {`
          .workshop-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .workshop-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 8%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .workshop-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 2%;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .workshop-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .workshop-container3 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .workshop-link {
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
          .workshop-link:hover {
            background-color: #c9c9c9;
          }
          @media (max-width: 767px) {
            .workshop-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .workshop-blog {
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

export default Workshop
