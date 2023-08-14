import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/thinlogo-200h.png" className="footer-image" />
          <span className="footer-text">
            <span className="">Empowering students since 2022</span>
            <br className=""></br>
            <br className=""></br>
            <br className=""></br>
            <br className=""></br>
            <span className="">Incorporated under the BC Society Act</span>
            <br className=""></br>
            <span className="">Incorporation number: S0077966</span>
            <br className=""></br>
          </span>
        </div>
        <div className="footer-links-container">
          <div className="footer-container1">
            <div className="footer-company-container">
              <span className="footer-text10">{props.text5}</span>
              <Link to="/" className="footer-navlink">
                {props.text6}
              </Link>
              <Link to="/mission" className="footer-navlink1">
                {props.text7}
              </Link>
              <Link to="/team" className="footer-navlink2">
                {props.text8}
              </Link>
              <Link to="/story" className="footer-text11">
                {props.text9}
              </Link>
            </div>
            <div className="footer-product-container">
              <span className="footer-text12">{props.Programs}</span>
              <Link to="/in-person-classes" className="footer-navlink3">
                {props.text2}
              </Link>
              <Link to="/workshop" className="footer-navlink4">
                {props.Workshops}
              </Link>
              <Link to="/zoom-classes" className="footer-navlink5">
                {props.text4}
              </Link>
            </div>
            <div className="footer-product-container1">
              <span className="footer-text13">{props.Programs1}</span>
              <Link to="/in-person-programs" className="footer-text14">
                Online
              </Link>
              <span className="footer-text15">
                <span className="">In-person</span>
                <br className=""></br>
              </span>
              <span className="">Coordinator</span>
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
                  className="footer-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon"
                  >
                    <path
                      d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                      className=""
                    ></path>
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
