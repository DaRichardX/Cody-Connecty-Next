import React from 'react'

import PropTypes from 'prop-types'

const TeamCard = (props) => {
  return (
    <>
      <div className={`team-card-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="team-card-image"
        />
        <h2 className="team-card-text">{props.title}</h2>
        <span className="team-card-text1">{props.subtitle}</span>
      </div>
      <style jsx>
        {`
          .team-card-gallery-card {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .team-card-text {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .team-card-text1 {
            color: var(--dl-color-gray-500);
            align-self: flex-start;
          }

          @media (max-width: 767px) {
            .team-card-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team-card-image {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
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
