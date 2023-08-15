import React from 'react'

import PropTypes from 'prop-types'

const SponsorsCard = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .sponsors-card-feature-card {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sponsors-card-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .sponsors-card-text {
            font-size: 3rem;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .sponsors-card-text1 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .sponsors-card-text2 {
            font-size: 1.4rem;
            margin-top: 0px;
            font-weight: 500;
          }
        `}
      </style>
    </>
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
