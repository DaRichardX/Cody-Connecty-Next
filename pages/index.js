import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import BlogCard from '../components/blog-card'
import JoinUsCards from '../components/join-us-cards'
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
            content="Code Connect is a non-profit organization dedicated to provide free and quality programming educations to elementary children."
          />
          <meta property="og:title" content="Code Connect" />
          <meta
            property="og:description"
            content="Code Connect is a non-profit organization dedicated to provide free and quality programming educations to elementary children."
          />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
        <div className="home-introduction">
          <div className="home-div">
            <lottie-player
              src="https://lottie.host/ce9ca870-a333-44f8-9a72-31749acd2d75/3Jo1iPrhrr.json"
              loop
              hover
              speed="1.2"
              autoplay
              background="transparent"
            ></lottie-player>
          </div>
          <div className="home-container1">
            <h1 className="home-text">Who are we?</h1>
            <span className="home-text01">
              <span>
                Code Connect is a non-profit organization dedicated to
                accompanying students on an adventurous jouney of learning
                programming and developing key critical thinking skills. We
                provide extra-curricular activities to students who other wise
                cannot participate in. We aim to assist them in a journey of
                self discovery through code and to ignite a passion for thinking
                critically.
              </span>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-blog">
          <div className="home-container2">
            <BlogCard
              label="ONSITE"
              title="Discover our in-person programs"
              author="Explore more"
              image_src="/img_4492_1-400h.jpeg"
              description="We offer group classes for both beginner and intermediate programmers. Classes will be held at the Wesbrook Community Center. All on-site classes will be taught in Python and be hosted on Sunday.       "
              rootClassName="rootClassName3"
            ></BlogCard>
          </div>
          <div className="home-container3">
            <BlogCard
              label="ONLINE"
              title="Join us online in our zoom classes"
              image_src="https://media.istockphoto.com/id/1237105921/vector/online-class-pupils-or-students-studying-with-computer-at-home-stay-school-learn-from-home.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=pSgrX00g09rTu6nAc35zoVB0XOABuQ0ppy0vctbJ8G0="
              description="We offer online tutoring that will be held via Zoom. You will be able to coordinate with your tutor based on your time schedules. Free 1-on-1 classes will be held on a weekly basis. We will support students based on what they already know, and what their intrested in (games, webpages, etc..)"
              rootClassName="rootClassName2"
            ></BlogCard>
          </div>
          <div className="home-container4">
            <BlogCard
              label="VOLUNTEERING"
              title="Want to sign up as a tutor?"
              image_src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?cs=srgb&amp;dl=pexels-linda-ellershein-3127880.jpg&amp;fm=jpg"
              description="As a volunteer with Code Connect, you will have the chance to cultivate valuable skills such as leadership, communication, and organization. Moreover, you will have the opportunity to form a supportive educational relationship with students, aiding in the development of their self-esteem, confidence, and programming skills. Our programs are available both online and in person."
              rootClassName="rootClassName1"
            ></BlogCard>
          </div>
        </div>
        <div className="home-banner">
          <h1 className="home-text06">Our Mission</h1>
          <span className="home-text07">
            <span>
              Our mission is to provide free, quality extracurricular education
              for children who wishes to explore their intrest in computers and
              programming. We also wishes to provide students a meaningful and
              memorizable chance to give back to the community, while developing
              leadership and communication skills.
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
            <a className="home-link button">Read More</a>
          </Link>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text12">
              <span>50</span>
              <span>+</span>
            </h1>
            <span className="home-text15">Students taught</span>
            <span className="home-text16">
              <span>and participated in our online and on-site programs</span>
              <br></br>
            </span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text19">6+</h1>
            <span className="home-text20">In-person term completed</span>
            <span className="home-text21">
              Averaging 10-12 students per term in a 9 weeks introductory class
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text22">160+</h1>
            <span className="home-text23">Hours impacted</span>
            <span className="home-text24">
              Combined from our online and on-site programs
            </span>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text25">Discover more</h1>
          <div className="home-container5">
            <JoinUsCards
              title="Our Mission"
              rootClassName="rootClassName"
            ></JoinUsCards>
            <JoinUsCards
              title="Presentations"
              rootClassName="rootClassName1"
            ></JoinUsCards>
            <JoinUsCards
              title="Donate"
              rootClassName="rootClassName5"
            ></JoinUsCards>
            <JoinUsCards
              title="Volunteering"
              rootClassName="rootClassName4"
            ></JoinUsCards>
          </div>
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
            background-color: #ffffff;
          }
          .home-introduction {
            gap: 5%;
            flex: 1;
            width: 100%;
            height: 80%;
            display: flex;
            padding: 2%;
            max-width: 100%;
            align-self: center;
            margin-top: 110px;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(241, 242, 181) 0%,
                rgba(255, 248, 234, 0.4) 100%
              ),
              url('/website%20assets%20(1');
            background-repeat: repeat, round;
            background-position: top left;
          }
          .home-div {
            width: 550px;
            height: 550px;
            align-self: center;
            padding-bottom: 7%;
          }
          .home-container1 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: 4%;
            padding-right: 4%;
            flex-direction: column;
            padding-bottom: 4%;
            justify-content: center;
          }
          .home-text {
            color: rgb(0, 0, 0);
            align-self: center;
            margin-top: 2%;
          }
          .home-text01 {
            color: rgba(0, 0, 0, 0.8);
            width: 80%;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: 2%;
            text-align: center;
            font-weight: 600;
            line-height: 1.2;
          }
          .home-blog {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 4%;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
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
            justify-content: space-between;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-image: linear-gradient(
              90deg,
              rgb(194, 229, 156) 0%,
              rgb(255, 248, 234) 100%
            );
          }
          .home-text06 {
            font-size: 3rem;
            text-align: center;
          }
          .home-text07 {
            font-size: 20px;
            max-width: var(--dl-size-size-maxwidth);
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link {
            color: #ffffff;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #000000;
          }
          .home-link:hover {
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
          .home-text12 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
          }
          .home-text15 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text16 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text19 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
          }
          .home-text20 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text21 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text22 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
          }
          .home-text23 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-text24 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text25 {
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 80%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-self: flex-end;
            align-items: center;
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 1200px) {
            .home-text12 {
              color: rgb(255, 124, 76);
              font-size: 3rem;
            }
            .home-container5 {
              align-self: flex-end;
              margin-right: 0px;
            }
          }
          @media (max-width: 991px) {
            .home-blog {
              flex-direction: column;
            }
            .home-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text07 {
              max-width: 100%;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-text25 {
              align-self: center;
            }
            .home-container5 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text07 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .home-text15 {
              text-align: center;
            }
            .home-text20 {
              text-align: center;
            }
            .home-text23 {
              text-align: center;
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container5 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home