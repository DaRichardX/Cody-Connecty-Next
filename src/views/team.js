import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import TeamCard from '../components/team-card'
import Footer from '../components/footer'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Code Connect</title>
        <meta property="og:title" content="Team - Code Connect" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name5"></NavBar>
      <h1 className="team-heading">Our Team</h1>
      <div className="team-gallery">
        <TeamCard
          title="Richard Xie"
          subtitle="President and Founder"
          image_alt="Richard Xie"
          image_src="/img_5819%20%5B1%5D-1400w-1500w.jpg"
          rootClassName="rootClassName"
        ></TeamCard>
        <TeamCard
          title="Claire Hua"
          subtitle="Vice-President"
          image_alt="Claire Hua"
          image_src="/untitled_design_41-1400w-1500w.png"
          rootClassName="rootClassName1"
        ></TeamCard>
        <TeamCard
          title="Eric Zhou"
          subtitle="Vice-President"
          image_alt="Claire Hua"
          rootClassName="rootClassName2"
        ></TeamCard>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Team
