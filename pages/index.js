import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'

const Home = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="home-container">
        <Head>
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
        </Head>
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
              <Link href="/get-started">
                <a className="home-link button">Get Started</a>
              </Link>
              <Link href="/mission">
                <a className="home-link1 button">Learn More</a>
              </Link>
            </div>
          </div>
          <div className="home-div">
            <lottie-player
              src="https://lottie.host/ce9ca870-a333-44f8-9a72-31749acd2d75/3Jo1iPrhrr.json"
              loop
              speed="0.5"
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
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
                cannot participate in. We aim to assist them in a journey of
                self discovery through code 
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
            <Link href="/mission">
              <a className="home-link2 button">Read More</a>
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
              technology. Our mission is to bridge the digital divide and
              provide access to quality coding education that equips young minds
              with the tools they need to succeed in a rapidly changing world.
              By nurturing curiosity, creativity, and critical thinking, we
              aspire to unlock endless opportunities for these young learners,
              which enable them to shape their futures and contribute positively
              to society.”
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
          <Link href="/mission">
            <a className="home-link3 button">Read More</a>
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
                    We offer online tutoring that will be held via Zoom. You
                    will be able to coordinate with your tutor based on your
                    time schedules. Free 1-on-1 classes will be held on a weekly
                    basis. We will support students based on what they already
                    know, and what their intrested in (games, webpages, etc..)
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
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 6%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            width: 616px;
            font-size: 3rem;
            max-width: 450px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text06 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            width: 100%;
            display: flex;
            margin-top: 4%;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-link1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .home-div {
            width: 100%;
            height: 72vh;
          }
          .home-banner {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-image: linear-gradient(
              270deg,
              rgba(198, 198, 133, 0.66) 22%,
              rgb(40, 121, 132) 100%
            );
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text07 {
            color: rgb(0, 0, 0);
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text08 {
            color: rgba(0, 0, 0, 0.84);
            font-size: 20px;
            max-width: 1000px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link2 {
            color: #ffffff;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #000000;
          }
          .home-link2:hover {
            transform: scale(1.02);
          }
          .home-stats {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            padding-top: 48px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text17 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text18 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text19 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text20 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text21 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-banner2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            background-image: linear-gradient(
              to right,
              #c2e59c 0%,
              #64b3f4 100%
            );
          }
          .home-text22 {
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-text23 {
            color: rgba(0, 0, 0, 0.84);
            font-size: 20px;
            max-width: 1000px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link3 {
            color: #ffffff;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #000000;
          }
          .home-link3:hover {
            transform: scale(1.02);
          }
          .home-stats1 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            padding-top: 48px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container4 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-blog-post-card {
            flex: 1 1;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog-post-card:hover {
            transform: scale(1.02);
          }
          .home-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          .home-container5 {
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container6 {
            flex: 1;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text28 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-text29 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text30 {
            color: var(--dl-color-gray-500);
            width: 100%;
            height: 100%;
            font-size: 1rem;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container7 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text31 {
            font-weight: 300;
            text-decoration: underline;
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .home-banner {
              background-image: linear-gradient(
                to right,
                #f1f2b5 0%,
                #135058 100%
              );
            }
            .home-text07 {
              text-align: justify;
            }
            .home-text08 {
              color: rgb(0, 0, 0);
              text-align: center;
            }
            .home-text14 {
              color: rgb(255, 124, 76);
            }
            .home-text20 {
              color: rgb(255, 124, 76);
              font-size: 3rem;
            }
            .home-banner2 {
              align-items: center;
              padding-bottom: 48px;
              justify-content: center;
              background-image: linear-gradient(
                to right,
                #c2e59c 0%,
                #64b3f4 100%
              );
            }
            .home-text23 {
              font-size: 20px;
            }
            .home-link3 {
              color: rgb(255, 255, 255);
              text-decoration: none;
              background-color: rgb(0, 0, 0);
            }
            .home-container6 {
              height: 25vw;
              margin-bottom: 5%;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              font-size: 3rem;
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-text06 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-btn-group {
              justify-content: center;
            }
            .home-text08 {
              max-width: 100%;
            }
            .home-text14 {
              text-align: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text20 {
              text-align: center;
            }
            .home-text23 {
              max-width: 100%;
            }
            .home-stats1 {
              grid-template-columns: 1fr 1fr;
            }
            .home-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container4 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image {
              height: 350px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              font-size: 3rem;
            }
            .home-text01 {
              font-weight: 900;
            }
            .home-text02 {
              font-weight: 900;
            }
            .home-text03 {
              font-weight: 900;
            }
            .home-text04 {
              font-weight: 900;
            }
            .home-text06 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-div {
              height: 52vh;
            }
            .home-banner {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text08 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              align-self: stretch;
              font-style: normal;
              font-weight: 500;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text17 {
              text-align: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-text21 {
              text-align: center;
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text23 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-stats1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              margin-top: 24%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              width: 100%;
              font-size: 3rem;
              margin-top: 4%;
            }
            .home-text01 {
              font-weight: 900;
            }
            .home-text02 {
              font-weight: 900;
            }
            .home-text03 {
              font-weight: 900;
            }
            .home-text04 {
              font-weight: 900;
            }
            .home-btn-group {
              margin-top: 0%;
              flex-direction: column;
            }
            .home-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-div {
              height: var(--dl-size-size-xxlarge);
              margin-top: -%;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text08 {
              color: rgb(0, 0, 0);
              font-size: 20px;
              align-self: stretch;
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-stats1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
