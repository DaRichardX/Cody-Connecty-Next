import React from 'react'

import { Helmet } from 'react-helmet'

import './online-programs.css'

const OnlinePrograms = (props) => {
  return (
    <div className="online-programs-container">
      <Helmet>
        <title>Online Volunteering - Code Connect</title>
        <meta
          property="og:title"
          content="Online Volunteering - Code Connect"
        />
      </Helmet>
    </div>
  )
}

export default OnlinePrograms
