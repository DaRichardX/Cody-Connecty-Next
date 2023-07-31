import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={props.image_src1} className="footer-image" />
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
              <div className="footer-product-container">
                <span className="footer-text10">{props.Programs}</span>
                <span className="footer-text11">{props.text2}</span>
                <span className="footer-text12">{props.Workshops}</span>
                <span>{props.text4}</span>
              </div>
              <div className="footer-company-container">
                <span className="footer-text14">{props.text5}</span>
                <span className="footer-text15">{props.text6}</span>
                <span className="footer-text16">{props.text7}</span>
                <span className="footer-text17">{props.text8}</span>
                <span>{props.text9}</span>
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
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="footer-icon"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon2"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
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
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: 46%;
            height: 10%;
            align-self: flex-start;
            margin-top: -3%;
            object-fit: cover;
            margin-left: -1%;
          }
          .footer-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text14 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text17 {
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
          .footer-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            align-self: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
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

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
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
              flex-direction: row;
              justify-content: center;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
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
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text2: 'In-person',
  text9: 'Blogs',
  text10: 'Contact Us',
  text6: 'About',
  image_src1: 'd6e88146-80e6-432d-a9a3-33342e5602b1',
  image_alt: 'image',
  text11: 'info@codeconnect.ca',
  text8: 'Team',
  rootClassName: '',
  Programs: 'Programs',
  text7: 'Our mission',
  text4: 'Online',
  image_src: '80c4bf10-438b-44ae-8955-a2dcbbb72b30',
  text5: 'About us',
  text13: 'Follow Us',
  Workshops: 'Workshops',
}

Footer.propTypes = {
  text2: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text6: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  text11: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  Programs: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text5: PropTypes.string,
  text13: PropTypes.string,
  Workshops: PropTypes.string,
}

export default Footer
