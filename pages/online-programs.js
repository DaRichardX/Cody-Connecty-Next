import React from 'react'
import Head from 'next/head'

const OnlinePrograms = (props) => {
  return (
    <>
      <div className="online-programs-container">
        <Head>
          <title>Online Volunteering - Code Connect</title>
          <meta
            property="og:title"
            content="Online Volunteering - Code Connect"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .online-programs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default OnlinePrograms
