import React from 'react'

import { Helmet } from 'react-helmet'

import './in-person-programs.css'

const InPersonPrograms = (props) => {
  return (
    <div className="in-person-programs-container">
      <Helmet>
        <title>In-person Volunteering - Code Connect</title>
        <meta
          property="og:title"
          content="In-person Volunteering - Code Connect"
        />
      </Helmet>
    </div>
  )
}

export default InPersonPrograms
