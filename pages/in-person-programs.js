import React from 'react'
import Head from 'next/head'

const InPersonPrograms = (props) => {
  return (
    <>
      <div className="in-person-programs-container">
        <Head>
          <title>In-person Volunteering - Code Connect</title>
          <meta
            property="og:title"
            content="In-person Volunteering - Code Connect"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .in-person-programs-container {
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

export default InPersonPrograms
