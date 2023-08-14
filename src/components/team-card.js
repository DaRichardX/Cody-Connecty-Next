import React from 'react'

import PropTypes from 'prop-types'

import './team-card.css'

const TeamCard = (props) => {
  return (
    <div className={`team-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="team-card-image"
      />
      <h2 className="team-card-text">{props.title}</h2>
      <span className="team-card-text1">{props.subtitle}</span>
    </div>
  )
}

TeamCard.defaultProps = {
  rootClassName: '',
  title: 'Project Title',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
}

TeamCard.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
}

export default TeamCard
