import React from 'react'

import PropTypes from 'prop-types'

import './class-card.css'

const ClassCard = (props) => {
  return (
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
