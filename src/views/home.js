import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Code Connect</title>
        <meta
          name="description"
          content="Code Connect is a non-profit organization dedicated to providing free and quality programming education to elementary children."
        />
        <meta property="og:title" content="Code Connect" />
        <meta
          property="og:description"
          content="Code Connect is a non-profit organization dedicated to providing free and quality programming education to elementary children."
        />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="home-hero">
        <div className="home-container1 animate__fadeInDown animate__animated">
          <h1 className="home-text">
            <span className="home-text01">
              At Code Connect, The Future is Your&apos;s to Code.
            </span>
            <br className="home-text02"></br>
            <br className="home-text03"></br>
            <span className="home-text04">One Line at a Time.</span>
            <br></br>
          </h1>
          <span className="home-text06">
            Embark with us on this transformative journey of bridging the
            digital divide.
          </span>
          <div className="home-btn-group">
            <Link to="/get-started" className="home-navlink button">
              Get Started
            </Link>
            <Link to="/mission" className="home-navlink1 button">
              Learn More
            </Link>
          </div>
        </div>
        <Player
          src="https://lottie.host/ce9ca870-a333-44f8-9a72-31749acd2d75/3Jo1iPrhrr.json"
          loop
          speed="0.5"
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-text07">About us</h1>
          <div className="home-container2"></div>
          <span className="home-text08">
            <span>
              Code Connect is a non-profit organization dedicated to
              accompanying students on an adventurous jouney of learning
              programming and developing key critical thinking skills. We
              provide extra-curricular activities to students who other wise
              cannot participate in. We aim to assist them in a journey of self
              discovery through code 
            </span>
            <span>and to ignite a passion for thinking critically.</span>
            <br></br>
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
          <Link to="/mission" className="home-navlink2 button">
            Read More
          </Link>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text14">
            <span>100</span>
            <span>+</span>
          </h1>
          <span className="home-text17">Students taught</span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text18">6+</h1>
          <span className="home-text19">In-person term completed</span>
        </div>
        <div className="home-stat2">
          <h1 className="home-text20">230+</h1>
          <span className="home-text21">Hours impacted</span>
        </div>
      </div>
      <div className="home-banner2">
        <h1 className="home-text22">Our Mission</h1>
        <span className="home-text23">
          <span>
            “Code Connect is dedicated to empowering children in adverse
            circumstances with coding skills and fostering a passion for
            technology. Our mission is to bridge the digital divide and provide
            access to quality coding education that equips young minds with the
            tools they need to succeed in a rapidly changing world. By nurturing
            curiosity, creativity, and critical thinking, we aspire to unlock
            endless opportunities for these young learners, which enable them to
            shape their futures and contribute positively to society.”
          </span>
          <br></br>
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
        <Link to="/mission" className="home-navlink3 button">
          Read More
        </Link>
      </div>
      <div className="home-stats1">
        <div className="home-container3">
          <BlogCard
            label="ONSITE"
            title="Discover our in-person programs"
            author="Explore more"
            image_src="/img_4492_1-400h.jpeg"
            description="We offer group classes for both beginner and intermediate programmers. Classes will be held at the Wesbrook Community Center. All on-site classes will be taught in Python and be hosted on Sunday.       "
            rootClassName="rootClassName3"
          ></BlogCard>
        </div>
        <div className="home-container4">
          <div className="home-blog-post-card">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/1237105921/vector/online-class-pupils-or-students-studying-with-computer-at-home-stay-school-learn-from-home.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=pSgrX00g09rTu6nAc35zoVB0XOABuQ0ppy0vctbJ8G0="
              className="home-image"
            />
            <div className="home-container5">
              <div className="home-container6">
                <span className="home-text28">ONLINE</span>
                <span className="home-text29">
                  Join us online in our zoom classes
                </span>
                <span className="home-text30">
                  We offer online tutoring that will be held via Zoom. You will
                  be able to coordinate with your tutor based on your time
                  schedules. Free 1-on-1 classes will be held on a weekly basis.
                  We will support students based on what they already know, and
                  what their intrested in (games, webpages, etc..)
                </span>
              </div>
              <div className="home-container7">
                <div className="home-profile">
                  <span className="home-text31">Explore More</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <BlogCard
          title="Want to sign up as a tutor?"
          image_src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?cs=srgb&amp;dl=pexels-linda-ellershein-3127880.jpg&amp;fm=jpg"
          description="&quot;Did you know that coding opens doors to careers earning anywhere from $67,370 to around $116,220 per year? Whether you're thriving or facing challenges, at Code Connect, we're here to ignite opportunities for young aspiring coders. Join our squad of dedicated mentors, where your growth matters."
          rootClassName="rootClassName2"
        ></BlogCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
