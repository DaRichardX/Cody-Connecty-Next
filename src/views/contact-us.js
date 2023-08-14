import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ContactUsCard from '../components/contact-us-card'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact Us - Code Connect</title>
        <meta property="og:title" content="Contact Us - Code Connect" />
      </Helmet>
      <div className="contact-us-container1">
        <NavBar rootClassName="nav-bar-root-class-name9"></NavBar>
        <div className="contact-us-container2">
          <div className="contact-us-features">
            <h1 className="contact-us-text">
              <span>Contact us @</span>
              <br></br>
            </h1>
            <div className="contact-us-container3">
              <ContactUsCard
                title="Inquiries"
                action="info@codeconnct.ca"
                description="For informations about the program &amp; other"
                rootClassName="rootClassName"
              ></ContactUsCard>
              <ContactUsCard
                title="Richard Xie"
                action="zheyuan@codeconnect.ca"
                description="President"
                rootClassName="rootClassName3"
              ></ContactUsCard>
              <ContactUsCard
                title="Claire Hua"
                action="claire@codeconnect.ca"
                description="Vice-President"
                rootClassName="rootClassName5"
              ></ContactUsCard>
              <ContactUsCard
                title="Eric Zhou"
                action="eric@codeconnect.ca"
                description="Vice-President"
                rootClassName="rootClassName1"
              ></ContactUsCard>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name10"></Footer>
      </div>
    </div>
  )
}

export default ContactUs
