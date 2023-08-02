import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavBar = (props) => {
  return (
    <>
      <div className={`nav-bar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
          <Link href="/">
            <a className="nav-bar-link">
              <img
                alt={props.image_alt}
                src="/logoo2-400w.png"
                className="nav-bar-image"
              />
            </a>
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
                      <path d="M426 726v-428l214 214z"></path>
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
                    <Link href="/mission">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle01"
                        >
                          <span className="nav-bar-text01">Mission</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown01 list-item"
                  >
                    <Link href="/impact">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle02"
                        >
                          <span className="nav-bar-text02">Impact</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown02 list-item"
                  >
                    <Link href="/team">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle03"
                        >
                          <span className="nav-bar-text03">Team</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown03 list-item"
                  >
                    <Link href="/story">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle04"
                        >
                          <span className="nav-bar-text04">
                            <span>Story</span>
                            <br></br>
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="nav-bar-programs list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-bar-dropdown-toggle05"
                >
                  <span className="nav-bar-text07">Programs</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-icon02">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown04 list-item"
                  >
                    <Link href="/in-person-classes">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle06"
                        >
                          <span className="nav-bar-text08">In-person</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown05 list-item"
                  >
                    <Link href="/zoom-classess">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle07"
                        >
                          <span className="nav-bar-text09">Zoom 1-on-1</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown06 list-item"
                  >
                    <Link href="/workshop">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle08"
                        >
                          <span className="nav-bar-text10">Workshops</span>
                        </div>
                      </a>
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
                  className="nav-bar-dropdown-toggle09"
                >
                  <span className="nav-bar-text11">Volunteer</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="nav-bar-icon04">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown07 list-item"
                  >
                    <Link href="/in-person-classes">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="nav-bar-dropdown-toggle10"
                        >
                          <span className="nav-bar-text12">
                            In-person Tutor
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle11"
                    >
                      <span className="nav-bar-text13">Online Mentor</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle12"
                    >
                      <span className="nav-bar-text14">
                        Volunteer Coordinator 
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="nav-bar-support list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list3"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle13"
                    >
                      <span className="nav-bar-text15">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle14"
                    >
                      <span className="nav-bar-text16">Sub-menu Item</span>
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
                    className="nav-bar-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle16"
                    >
                      <span className="nav-bar-text18">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle17"
                    >
                      <span className="nav-bar-text19">Sub-menu Item</span>
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
                      <span className="nav-bar-text20">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="/contact-us">
                <a className="nav-bar-link09">Contact</a>
              </Link>
              <span className="nav-bar-text21">
                <span>Blog</span>
                <br></br>
              </span>
              <div className="nav-bar-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="nav-bar-twitter-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <a
                  href="https://instagram.com/codeconnect.ca"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="nav-bar-link10"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="nav-bar-instagram-icon"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="nav-bar-btn-group">
            <button className="button">Join us</button>
          </div>
          <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-bar-icon08">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
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
                  src="/green_and_brown_minimal_leaf_code_logo-removebg-preview-1500h.png"
                  className="nav-bar-image1"
                />
                <div data-thq="thq-close-menu" className="nav-bar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="nav-bar-icon10">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="nav-bar-nav2"
              >
                <span className="nav-bar-text24">About</span>
                <span className="nav-bar-text25">Features</span>
                <span className="nav-bar-text26">Pricing</span>
                <span className="nav-bar-text27">Team</span>
                <span className="nav-bar-text28">Blog</span>
              </nav>
              <div className="nav-bar-container3">
                <button className="nav-bar-login button">
                  <span>
                    <span>Join us</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="nav-bar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="nav-bar-icon12"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="nav-bar-icon14"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-bar-icon16"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .nav-bar-container {
            width: 100%;
            height: 90px;
            display: flex;
            z-index: 1;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #fff8ea;
          }
          .nav-bar-navbar-interactive {
            width: 100%;
            display: flex;
            position: fixed;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .nav-bar-link {
            display: contents;
          }
          .nav-bar-image {
            width: 22%;
            height: auto;
            min-width: 270px;
            object-fit: cover;
            margin-bottom: 0.5%;
            text-decoration: none;
          }
          .nav-bar-desktop-menu {
            display: flex;
          }
          .nav-bar-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-bar-about {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-text {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-bar-dropdown-arrow {
            transition: 0.3s;
          }
          .nav-bar-icon {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .nav-bar-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text01 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle04:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text04 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-programs {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-text07 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-bar-dropdown-arrow1 {
            transition: 0.3s;
          }
          .nav-bar-icon02 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .nav-bar-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle08:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-volunteer {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-text11 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-bar-dropdown-arrow2 {
            transition: 0.3s;
          }
          .nav-bar-icon04 {
            width: 18px;
            height: 18px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .nav-bar-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .nav-bar-dropdown-toggle10:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text12 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle11 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text13 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle12 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text14 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-support {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-list3 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle14 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text16 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text17 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-blog {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-list4 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle16 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text18 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle17 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text19 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle18 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .nav-bar-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-text20 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .nav-bar-link09 {
            color: #595959;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .nav-bar-text21 {
            color: #595959;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-container1 {
            flex: 0 0 auto;
            width: 10%;
            height: auto;
            display: flex;
            align-items: space-between;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-bar-twitter-icon {
            width: 24px;
            height: 24px;
          }
          .nav-bar-link10 {
            display: contents;
          }
          .nav-bar-instagram-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .nav-bar-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-bar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .nav-bar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav-bar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-bar-image1 {
            height: 2rem;
          }
          .nav-bar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-bar-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-text24 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text28 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .nav-bar-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon-group {
            display: flex;
          }
          .nav-bar-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-root-class-name {
            max-width: 100%;
            background-color: #ffffff;
          }
          .nav-bar-root-class-name1 {
            background-color: #ffffff;
          }
          .nav-bar-root-class-name2 {
            background-color: #ffffff;
          }
          .nav-bar-root-class-name3 {
            background-color: #ffffff;
          }

          .nav-bar-root-class-name5 {
            background-color: #ffffff;
          }
          .nav-bar-root-class-name6 {
            background-color: #ffffff;
          }
          .nav-bar-root-class-name7 {
            align-self: center;
            background-color: #ffffff;
          }
          .nav-bar-root-class-name8 {
            background-color: #ffffff;
          }
          .nav-bar-root-class-name9 {
            background-color: #ffffff;
          }
          @media (max-width: 1200px) {
            .nav-bar-navbar-interactive {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .nav-bar-image {
              width: 20%;
            }
            .nav-bar-link09 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-twounits);
            }
            .nav-bar-text21 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-twounits);
            }
            .nav-bar-container1 {
              width: 10%;
              align-self: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 991px) {
            .nav-bar-desktop-menu {
              display: none;
            }
            .nav-bar-btn-group {
              display: none;
            }
            .nav-bar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .nav-bar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .nav-bar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .nav-bar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
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
