import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/thinlogo-200h.png" className="footer-image" />
            <span className="footer-text">
              <span>Empowering students since 2022</span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <span>Incorporated under the BC Society Act</span>
              <br></br>
              <span>Incorporation number: S0077966</span>
              <br></br>
            </span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <div className="footer-company-container">
                <span className="footer-text10">{props.text5}</span>
                <Link href="/">
                  <a className="footer-link">{props.text6}</a>
                </Link>
                <Link href="/mission">
                  <a className="footer-link1">{props.text7}</a>
                </Link>
                <Link href="/team">
                  <a className="footer-link2">{props.text8}</a>
                </Link>
                <Link href="/story">
                  <a className="footer-link3">{props.text9}</a>
                </Link>
              </div>
              <div className="footer-product-container">
                <span className="footer-text12">{props.Programs}</span>
                <Link href="/in-person-classes">
                  <a className="footer-link4">{props.text2}</a>
                </Link>
                <Link href="/workshop">
                  <a className="footer-link5">{props.Workshops}</a>
                </Link>
                <Link href="/zoom-classes">
                  <a className="footer-link6">{props.text4}</a>
                </Link>
              </div>
              <div className="footer-product-container1">
                <span className="footer-text13">{props.Programs1}</span>
                <Link href="/in-person-programs">
                  <a className="footer-link7">Online</a>
                </Link>
                <span className="footer-text15">
                  <span>In-person</span>
                  <br></br>
                </span>
                <span>Coordinator</span>
              </div>
            </div>
            <div className="footer-container2">
              <div className="footer-contact">
                <span className="footer-text19">{props.text10}</span>
                <span className="footer-text20">{props.text11}</span>
              </div>
              <div className="footer-socials">
                <span className="footer-text21">{props.text13}</span>
                <div className="footer-icon-group">
                  <a
                    href="https://instagram.com/code.connect.ca"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link8"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text22">
          2023 Code Connect, All Rights Reserved.
        </span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            width: 35%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: 42%;
            height: 10%;
            min-width: 230px;
            align-self: flex-start;
            object-fit: cover;
            margin-left: -0.5%;
          }
          .footer-text {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: -1%;
          }
          .footer-links-container {
            width: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-right: 6%;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link3 {
            text-decoration: none;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link6 {
            text-decoration: none;
          }
          .footer-product-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text13 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link7 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text19 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text21 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link8 {
            display: contents;
          }
          .footer-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text22 {
            align-self: center;
          }
          .footer-root-class-name {
            margin-top: 4%;
          }
          .footer-root-class-name1 {
            top: 0px;
            left: 100px;
            position: static;
            align-self: center;
          }

          @media (max-width: 1200px) {
            .footer-logo {
              width: 30%;
            }
            .footer-container1 {
              width: 100%;
              margin-left: 6%;
            }
          }
          @media (max-width: 991px) {
            .footer-footer {
              width: 100%;
              flex-direction: column;
            }
            .footer-image {
              margin-left: -6%;
            }
            .footer-container1 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              width: 80%;
              align-items: center;
            }
            .footer-image {
              align-self: center;
              margin-left: var(--dl-space-space-halfunit);
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
            .footer-container1 {
              max-width: 400px;
              align-self: center;
            }
            .footer-product-container {
              margin-right: 5%;
            }
            .footer-product-container1 {
              margin-right: 5%;
            }
            .footer-container2 {
              align-self: center;
            }
            .footer-root-class-name13 {
              margin-top: 80%;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              align-self: center;
              margin-left: 0px;
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container1 {
              align-self: center;
              margin-right: 0px;
            }
            .footer-product-container1 {
              margin-right: 0px;
            }
            .footer-container2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text22 {
              text-align: center;
            }
            .footer-root-class-name2 {
              margin-top: 20%;
            }
            .footer-root-class-name13 {
              margin-top: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text2: 'In-person',
  text9: 'Story',
  text10: 'Contact Us',
  text6: 'About',
  Programs1: 'Volunteer',
  image_src1: 'd6e88146-80e6-432d-a9a3-33342e5602b1',
  image_alt: 'image',
  text41: 'Online',
  text11: 'info@codeconnect.ca',
  text21: 'Online',
  text8: 'Team',
  rootClassName: '',
  Programs: 'Programs',
  text7: 'Our mission',
  text4: 'Online',
  image_src: '80c4bf10-438b-44ae-8955-a2dcbbb72b30',
  text5: 'About us',
  text13: 'Follow Us',
  Workshops1: 'Workshops',
  Workshops: 'Workshops',
}

Footer.propTypes = {
  text2: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text6: PropTypes.string,
  Programs1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  text41: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  Programs: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text5: PropTypes.string,
  text13: PropTypes.string,
  Workshops1: PropTypes.string,
  Workshops: PropTypes.string,
}

export default Footer
