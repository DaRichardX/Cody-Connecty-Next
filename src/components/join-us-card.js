import React from 'react'

import PropTypes from 'prop-types'

import './join-us-card.css'

const JoinUsCard = (props) => {
  return (
    <div className={`join-us-card-feature-card ${props.rootClassName} `}>
      <h2 className="join-us-card-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="join-us-card-image"
      />
    </div>
  )
}

JoinUsCard.defaultProps = {
  title: 'Lorem ipsum',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  rootClassName: '',
}

JoinUsCard.propTypes = {
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default JoinUsCard
