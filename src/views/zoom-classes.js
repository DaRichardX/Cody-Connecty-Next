import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ClassCard from '../components/class-card'
import Footer from '../components/footer'
import './zoom-classes.css'

const ZoomClasses = (props) => {
  return (
    <div className="zoom-classes-container">
      <Helmet>
        <title>Online Classes - Code Connect</title>
        <meta property="og:title" content="Online Classes - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
      <h1 className="zoom-classes-text">Online Tutoring</h1>
      <div className="zoom-classes-blog">
        <div className="zoom-classes-container1">
          <ClassCard
            label="Join uS"
            title="Volunteer"
            image_src="/photo-1554415707-6e8cfc93fe23-1500w.jpg"
            description="As a volunteer with Code Connect, you will have the chance to cultivate valuable skills such as leadership, communication, and organization. Moreover, you will have the opportunity to form a supportive educational relationship with students, aiding in the development of their self-esteem, confidence, and programming skills."
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName4"
          ></ClassCard>
        </div>
        <div className="zoom-classes-container2">
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
          className="zoom-classes-link button"
        >
          Join us Today!
        </a>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default ZoomClasses
