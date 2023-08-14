import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-bar.css'

const NavBar = (props) => {
  return (
    <div className={`nav-bar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
        <Link to="/" className="nav-bar-navlink">
          <img
            alt={props.image_alt}
            src="/thinlogo-1500h.png"
            className="nav-bar-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="nav-bar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="nav-bar-nav"
          >
            <div data-thq="thq-dropdown" className="nav-bar-about list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-bar-dropdown-toggle"
              >
                <span className="nav-bar-text">About</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="nav-bar-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-bar-icon">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown list-item"
                >
                  <Link to="/mission" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle01"
                    >
                      <span className="nav-bar-text01">Mission</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown01 list-item"
                >
                  <Link to="/sponsors" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle02"
                    >
                      <span className="nav-bar-partners">Sponsors</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown02 list-item"
                >
                  <Link to="/impact" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle03"
                    >
                      <span className="nav-bar-text02">Impact</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown03 list-item"
                >
                  <Link to="/team" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle04"
                    >
                      <span className="nav-bar-text03">Team</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown04 list-item"
                >
                  <Link to="/story" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle05"
                    >
                      <span className="nav-bar-text04">
                        <span className="">Story</span>
                        <br className=""></br>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="nav-bar-programs list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-bar-dropdown-toggle06"
              >
                <span className="nav-bar-text07">Programs</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="nav-bar-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-bar-icon02">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown05 list-item"
                >
                  <Link to="/in-person-classes" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle07"
                    >
                      <span className="nav-bar-text08">In-person</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown06 list-item"
                >
                  <Link to="/zoom-classes" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle08"
                    >
                      <span className="nav-bar-text09">Online Programs</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown07 list-item"
                >
                  <Link to="/workshop" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle09"
                    >
                      <span className="nav-bar-text10">Workshops</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="nav-bar-volunteer list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-bar-dropdown-toggle10"
              >
                <span className="nav-bar-text11">Volunteer</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="nav-bar-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-bar-icon04">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown08 list-item"
                >
                  <Link to="/in-person-classes" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle11"
                    >
                      <span className="nav-bar-text12">In-person Tutor</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle12"
                  >
                    <span className="nav-bar-text13">Online Tutor</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle13"
                  >
                    <span className="nav-bar-text14">Volunteer Ambassador</span>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="nav-bar-support list-item">
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-dropdown-list3"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle14"
                  >
                    <span className="nav-bar-text15">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle15"
                  >
                    <span className="nav-bar-text16">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle16"
                  >
                    <span className="nav-bar-text17">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="nav-bar-blog list-item">
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-dropdown-list4"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle17"
                  >
                    <span className="nav-bar-text18">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown15 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle18"
                  >
                    <span className="nav-bar-text19">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-dropdown16 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-dropdown-toggle19"
                  >
                    <span className="nav-bar-text20">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/contact-us" className="nav-bar-navlink10">
              Contact
            </Link>
            <div className="nav-bar-container1">
              <a
                href="https://instagram.com/code.connect.ca"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-bar-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="nav-bar-instagram-icon"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="nav-bar-btn-group">
          <Link to="/get-started" className="nav-bar-register button">
            Join us
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon07">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="nav-bar-nav1"
          >
            <div className="nav-bar-container2">
              <img
                alt="image"
                src="/thinlogo-1500h.png"
                className="nav-bar-image1"
              />
              <div data-thq="thq-close-menu" className="nav-bar-menu-close">
                <svg viewBox="0 0 1024 1024" className="nav-bar-icon09">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="nav-bar-nav2"
            >
              <div data-thq="thq-dropdown" className="nav-bar-about1 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-bar-dropdown-toggle20"
                >
                  <span className="nav-bar-text21">About</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow3"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-icon11">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list5"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown17 list-item"
                  >
                    <Link to="/mission" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle21"
                      >
                        <span className="nav-bar-text22">Mission</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown18 list-item"
                  >
                    <Link to="/impact" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle22"
                      >
                        <span className="nav-bar-text23">Impact</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown19 list-item"
                  >
                    <Link to="/team" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle23"
                      >
                        <span className="nav-bar-text24">Team</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown20 list-item"
                  >
                    <Link to="/story" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle24"
                      >
                        <span className="nav-bar-text25">
                          <span className="">Story</span>
                          <br className=""></br>
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="nav-bar-programs1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-bar-dropdown-toggle25"
                >
                  <span className="nav-bar-text28">Programs</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow4"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-icon13">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list6"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown21 list-item"
                  >
                    <Link to="/in-person-classes" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle26"
                      >
                        <span className="nav-bar-text29">In-person</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown22 list-item"
                  >
                    <Link to="/zoom-classes" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle27"
                      >
                        <span className="nav-bar-text30">Zoom 1-on-1</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown23 list-item"
                  >
                    <Link to="/workshop" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle28"
                      >
                        <span className="nav-bar-text31">Workshops</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="nav-bar-volunteer1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-bar-dropdown-toggle29"
                >
                  <span className="nav-bar-text32">Volunteer</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow5"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-icon15">
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list7"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown24 list-item"
                  >
                    <Link to="/in-person-classes" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="nav-bar-dropdown-toggle30"
                      >
                        <span className="nav-bar-text33">In-person Tutor</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown25 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle31"
                    >
                      <span className="nav-bar-text34">Online Mentor</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown26 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle32"
                    >
                      <span className="nav-bar-text35">
                        Volunteer Coordinator 
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="nav-bar-container3">
              <button className="nav-bar-login button">
                <span className="">
                  <span className="">Join us</span>
                  <br className=""></br>
                </span>
              </button>
            </div>
          </div>
          <div className="nav-bar-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="nav-bar-icon17"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="nav-bar-icon19"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="nav-bar-icon21"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

NavBar.defaultProps = {
  image_src: '80c4bf10-438b-44ae-8955-a2dcbbb72b30',
  image_alt: 'image',
  rootClassName: '',
}

NavBar.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavBar
