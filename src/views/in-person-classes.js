import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './in-person-classes.css'

const InPersonClasses = (props) => {
  return (
    <div className="in-person-classes-container">
      <Helmet>
        <title>In-Person Classes - Code Connect</title>
        <meta property="og:title" content="In-Person Classes - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name7"></NavBar>
      <div className="in-person-classes-container1">
        <h1 className="in-person-classes-notice">
          Registration is currently closed; Program signups available after Aug
          14th
        </h1>
      </div>
      <div className="in-person-classes-features">
        <h1 className="in-person-classes-text">Our In-person programs</h1>
        <div className="in-person-classes-separator"></div>
        <div className="in-person-classes-container2">
          <div className="in-person-classes-container3">
            <div className="in-person-classes-feature-card">
              <svg viewBox="0 0 1024 1024" className="in-person-classes-icon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <h2 className="in-person-classes-text01">
                Introduction to Coding
              </h2>
              <span className="in-person-classes-text02">
                <span>
                  provides a basic coding experience to youth who are interested
                  in the world of coding. Utilizing the versatile and
                  user-friendly language of Python, students will learn the
                  foundational concepts and skills of programming through
                  hands-on projects and group learning.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Our Volunteer instructors will guide them through the process,
                  allowing them to not only gain a solid understanding of
                  coding, but also have fun while doing it. Join us in this
                  journey of discovery and unleash the potential of technology.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="in-person-classes-feature-card1">
              <h2 className="in-person-classes-text13">
                Time, Location &amp; Fees
              </h2>
              <span className="in-person-classes-text14">
                <span className="in-person-classes-text15">
                  9/17/23 to 11/26/23 every Sunday from 10:30AM to 11:30 AM
                </span>
                <br className="in-person-classes-text16"></br>
                <br className="in-person-classes-text17"></br>
                <span className="in-person-classes-text18">
                  Registeration opens Aug 14th
                </span>
                <br className="in-person-classes-text19"></br>
                <br className="in-person-classes-text20"></br>
                <br className="in-person-classes-text21"></br>
                <span className="in-person-classes-text22">
                  $20.00 for 11 sessions
                </span>
                <br className="in-person-classes-text23"></br>
                <br className="in-person-classes-text24"></br>
                <span className="in-person-classes-text25">
                  Hosted @ Our UBC Location
                </span>
                <br className="in-person-classes-text26"></br>
                <br className="in-person-classes-text27"></br>
                <span className="in-person-classes-text28">
                  Wesbrook Community Centre
                </span>
                <br className="in-person-classes-text29"></br>
                <span className="in-person-classes-text30">
                  3335 Webber Lane
                </span>
                <br className="in-person-classes-text31"></br>
                <span className="in-person-classes-text32">
                  Vancouver, British Columbia, V6S 0H3
                </span>
                <br></br>
              </span>
            </div>
            <div className="in-person-classes-feature-card2">
              <a
                href="https://myuna.perfectmind.com/SocialSite/BookMe4LandingPages/CoursesLandingPage?courseId=5f096bca-58e4-4eb3-975f-0febce4b70a9"
                target="_blank"
                rel="noreferrer noopener"
                className="in-person-classes-link button"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="in-person-classes-container4">
            <div className="in-person-classes-feature-card3">
              <svg viewBox="0 0 1024 1024" className="in-person-classes-icon2">
                <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
              </svg>
              <h2 className="in-person-classes-text34">Intermediate Coding</h2>
              <span className="in-person-classes-text35">
                <span>
                  Take your coding skills to the next level with our
                  Intermediate Coding class! Building on the foundations learned
                  in our Introduction to Coding class, students will delve
                  deeper into the capabilities of Python and explore more
                  advanced programming concepts.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  From data structures and algorithms, to object-oriented
                  programming and error handling, students will have the
                  opportunity to expand their knowledge and improve their coding
                  proficiency.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  With a combination of individual and group projects, students
                  will have the opportunity to apply their skills in real-world
                  scenarios and work on more complex tasks. Join us and take the
                  next step towards becoming a proficient coder!
                </span>
              </span>
            </div>
            <div className="in-person-classes-feature-card4">
              <h2 className="in-person-classes-text43">
                Time, Location &amp; Fees
              </h2>
              <span className="in-person-classes-text44">
                <span>
                  9/17/23 to 11/26/23 every Sunday from 11:35 AM to 12:35 PM
                </span>
                <br></br>
                <br></br>
                <span>Registeration opens Aug 14th</span>
                <br></br>
                <br></br>
                <br></br>
                <span>$20.00 for 11 sessions</span>
                <br></br>
                <br></br>
                <span>Hosted @ Our UBC Location</span>
                <br></br>
                <br></br>
                <span>Wesbrook Community Centre</span>
                <br></br>
                <span>3335 Webber Lane</span>
                <br></br>
                <span>Vancouver, British Columbia, V6S 0H3</span>
                <br></br>
              </span>
            </div>
            <div className="in-person-classes-feature-card5">
              <a
                href="https://myuna.perfectmind.com/SocialSite/BookMe4LandingPages/CoursesLandingPage?courseId=ca6d42dc-5825-43ee-927a-ecb31980f3ee"
                target="_blank"
                rel="noreferrer noopener"
                className="in-person-classes-link1 button"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="in-person-classes-container5">
            <img
              alt="image"
              src="/img_4492_1-400h.jpeg"
              className="in-person-classes-image"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.177305822175!2d-123.24017742394751!3d49.25408517277945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672d1782d9263%3A0x5373aa0d477e8907!2sWesbrook%20Community%20Centre!5e0!3m2!1sen!2sus!4v1691010487093!5m2!1sen!2sus"
              className="in-person-classes-iframe"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="in-person-classes-banner">
        <h2 className="in-person-classes-text64">
          <span className="in-person-classes-text65">
            Living outside of UBC? We offer remote classes too.
          </span>
          <br className="in-person-classes-text66"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <button className="in-person-classes-button button">Learn more</button>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default InPersonClasses
