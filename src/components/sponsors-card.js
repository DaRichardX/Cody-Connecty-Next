import React from 'react'

import PropTypes from 'prop-types'

import './sponsors-card.css'

const SponsorsCard = (props) => {
  return (
    <div className={`sponsors-card-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="sponsors-card-image"
      />
      <h2 className="sponsors-card-text">{props.title}</h2>
      <span className="sponsors-card-text1">{props.description}</span>
      <span className="sponsors-card-text2">{props.action}</span>
    </div>
  )
}

SponsorsCard.defaultProps = {
  image_alt: 'image',
  action: 'SEE MORE',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'Lorem ipsum',
  description: '',
}

SponsorsCard.propTypes = {
  image_alt: PropTypes.string,
  action: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SponsorsCard
