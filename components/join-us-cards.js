import React from 'react'

import PropTypes from 'prop-types'

const JoinUsCards = (props) => {
  return (
    <>
      <div className={`join-us-cards-feature-card ${props.rootClassName} `}>
        <h2 className="join-us-cards-text">{props.title}</h2>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="join-us-cards-image"
        />
      </div>
      <style jsx>
        {`
          .join-us-cards-feature-card {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .join-us-cards-feature-card:hover {
            transform: scale(1.02);
          }
          .join-us-cards-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .join-us-cards-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
        `}
      </style>
    </>
  )
}

JoinUsCards.defaultProps = {
  title: 'Lorem ipsum',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  rootClassName: '',
}

JoinUsCards.propTypes = {
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default JoinUsCards
