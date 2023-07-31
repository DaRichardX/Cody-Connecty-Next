import React from 'react'

import PropTypes from 'prop-types'

const ClassCard = (props) => {
  return (
    <>
      <div className={`class-card-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="class-card-image"
        />
        <div className="class-card-container">
          <div className="class-card-container1">
            <span className="class-card-text">{props.label}</span>
            <span className="class-card-text1">{props.when}</span>
          </div>
          <h1 className="class-card-text2">{props.title}</h1>
          <span className="class-card-text3">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .class-card-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .class-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .class-card-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .class-card-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .class-card-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .class-card-text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .class-card-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .class-card-text2 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .class-card-text3 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 991px) {
            .class-card-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .class-card-blog-post-card {
              flex-direction: column;
            }
            .class-card-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ClassCard.defaultProps = {
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  when: '3 days ago',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
}

ClassCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  when: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default ClassCard
