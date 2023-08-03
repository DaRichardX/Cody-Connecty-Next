import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>404 - Code Connect</title>
          <meta property="og:title" content="404 - Code Connect" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
        <div className="page-container1">
          <h1>
            <span>Page not found :(</span>
            <br></br>
          </h1>
          <span className="page-text03">
            <span>
              We couldn&apos;t find the page you were looking for. This is
              either because:
            </span>
            <br></br>
            <br></br>
            <span>
              - There is an error in the URL entered into your web browser.
              Please check the URL and try again.
            </span>
            <br></br>
            <br></br>
            <span>
              - The page you are looking for has been moved or deleted.
            </span>
          </span>
          <Link href="/">
            <a className="page-link">
              <h1 className="page-text11">
                <span>Return to homepage</span>
                <br></br>
              </h1>
            </a>
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .page-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-large);
            display: flex;
            margin-top: 10%;
            align-items: center;
            margin-bottom: 5%;
            flex-direction: column;
            justify-content: center;
          }
          .page-text03 {
            margin-top: 2%;
          }
          .page-link {
            display: contents;
          }
          .page-text11 {
            color: #16454c;
            font-size: 1em;
            margin-top: 2%;
            text-align: center;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Page
