import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavBar from '../components/nav-bar'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'

const Home = (props) => {
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
          <div className="home-hero1">
            <div className="home-container01 animate__fadeInDown animate__animated">
              <h1 className="home-heading">
                At Code Connect, the future is yours to
              </h1>
              <div>
                <div className="home-container03">
                  <Script
                    html={`<script>
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 210 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
</script>

<span
  class="txt-rotate"
  data-period="2600"
  data-rotate='[ "code.", "explore.", "build.", "imagine."]'
>code.</span>

<style>
  .txt-rotate {
    color: #000000;
    font-size: 2em;
    font-style: normal;
    font-family: Exo 2;
    font-weight: 700;
  }
</style>
`}
                  ></Script>
                </div>
              </div>
              <h1 className="home-heading1">One line at a time</h1>
              <span className="home-text">
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
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-text01">About us</h1>
            <div className="home-container04"></div>
            <span className="home-text02">
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
            <h1 className="home-text08">
              <span>100</span>
              <span>+</span>
            </h1>
            <span className="home-text11">Students taught</span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text12">6+</h1>
            <span className="home-text13">In-person term completed</span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text14">230+</h1>
            <span className="home-text15">Hours impacted</span>
          </div>
        </div>
        <div className="home-banner2">
          <h1 className="home-text16">Our Mission</h1>
          <span className="home-text17">
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
          <div className="home-container05">
            <BlogCard
              label="ONSITE"
              title="Discover our in-person programs"
              author="Explore more"
              image_src="/img_4492_1-400h.jpeg"
              description="We offer group classes for both beginner and intermediate programmers. Classes will be held at the Wesbrook Community Center. All on-site classes will be taught in Python and be hosted on Sunday.       "
              rootClassName="rootClassName3"
            ></BlogCard>
          </div>
          <div className="home-container06">
            <div className="home-blog-post-card">
              <img
                alt="image"
                src="https://media.istockphoto.com/id/1237105921/vector/online-class-pupils-or-students-studying-with-computer-at-home-stay-school-learn-from-home.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=pSgrX00g09rTu6nAc35zoVB0XOABuQ0ppy0vctbJ8G0="
                className="home-image"
              />
              <div className="home-container07">
                <div className="home-container08">
                  <span className="home-text22">ONLINE</span>
                  <span className="home-text23">
                    Join us online in our zoom classes
                  </span>
                  <span className="home-text24">
                    We offer online tutoring that will be held via Zoom. You
                    will be able to coordinate with your tutor based on your
                    time schedules. Free 1-on-1 classes will be held on a weekly
                    basis. We will support students based on what they already
                    know, and what their intrested in (games, webpages, etc..)
                  </span>
                </div>
                <div className="home-container09">
                  <div className="home-profile">
                    <span className="home-text25">Explore More</span>
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
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(189, 195, 199) 0%,
                rgba(44, 62, 80, 0) 100%
              ),
              radial-gradient(
                circle at left,
                rgb(189, 195, 199) 0%,
                rgba(74, 121, 168, 0.1) 46%
              ),
              url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxjb2Rpbmd8ZW58MHx8fHwxNjk0NTM5MzkzfDA&ixlib=rb-4.0.3&w=1500');
            background-position: right;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container01 {
            display: flex;
            align-self: center;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-heading {
            color: rgb(0, 0, 0);
            font-size: 2em;
            font-style: normal;
            font-family: Exo 2;
            font-weight: 600;
          }
          .home-container03 {
            display: contents;
          }
          .home-heading1 {
            color: rgb(0, 0, 0);
            font-size: 2em;
            font-style: normal;
            margin-top: 2vh;
            font-family: Exo 2;
            font-weight: 600;
          }
          .home-text {
            margin-top: var(--dl-space-space-twounits);
            font-family: Arial;
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
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-link1 {
            color: #000000;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-link1:hover {
            border-color: var(--dl-color-gray-black);
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
          .home-text01 {
            color: rgb(0, 0, 0);
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text02 {
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
          .home-text08 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text11 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text12 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text13 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text14 {
            color: rgb(255, 124, 76);
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text15 {
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
          .home-text16 {
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-text17 {
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
          .home-container05 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container06 {
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
          .home-container07 {
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container08 {
            flex: 1;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text22 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-text23 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text24 {
            color: var(--dl-color-gray-500);
            width: 100%;
            height: 100%;
            font-size: 1rem;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container09 {
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
          .home-text25 {
            font-weight: 300;
            text-decoration: underline;
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1364px) {
            .home-hero {
              background-position: right, bottom;
            }
          }
          @media (max-width: 1200px) {
            .home-hero1 {
              padding: 0px;
              justify-content: flex-start;
            }
            .home-text {
              font-family: Exo 2;
            }
            .home-link {
              font-family: Fira Sans;
            }
            .home-link1 {
              font-family: Fira Sans;
            }
            .home-banner {
              background-image: linear-gradient(
                to right,
                #f1f2b5 0%,
                #135058 100%
              );
            }
            .home-text01 {
              text-align: justify;
            }
            .home-text02 {
              color: rgb(0, 0, 0);
              text-align: center;
            }
            .home-text08 {
              color: rgb(255, 124, 76);
            }
            .home-text14 {
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
            .home-text17 {
              font-size: 20px;
            }
            .home-link3 {
              color: rgb(255, 255, 255);
              text-decoration: none;
              background-color: rgb(0, 0, 0);
            }
            .home-container08 {
              height: 25vw;
              margin-bottom: 5%;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
              background-image: linear-gradient(
                  180deg,
                  rgb(241, 242, 181) 0%,
                  rgba(198, 165, 74, 0.5) 100%
                ),
                url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxjb2Rpbmd8ZW58MHx8fHwxNjk0NTM5MzkzfDA&ixlib=rb-4.0.3&w=1500');
            }
            .home-hero1 {
              flex-direction: column;
              justify-content: center;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-btn-group {
              justify-content: center;
            }
            .home-link1 {
              font-style: normal;
              font-weight: 400;
            }
            .home-text02 {
              max-width: 100%;
            }
            .home-text08 {
              text-align: center;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text14 {
              text-align: center;
            }
            .home-text17 {
              max-width: 100%;
            }
            .home-stats1 {
              grid-template-columns: 1fr 1fr;
            }
            .home-container05 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container06 {
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
            .home-hero1 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-heading {
              text-align: center;
            }
            .home-text {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
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
            .home-text02 {
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
            .home-text11 {
              text-align: center;
            }
            .home-text13 {
              text-align: center;
            }
            .home-text15 {
              text-align: center;
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text17 {
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
              background-position: right, top right;
            }
            .home-hero1 {
              margin-top: 10%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              margin-top: 0%;
              flex-direction: column;
            }
            .home-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
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
            .home-text02 {
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
