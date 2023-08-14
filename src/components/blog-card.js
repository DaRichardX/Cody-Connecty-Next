import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <div className="blog-card-container">
        <div className="blog-card-container1">
          <span className="blog-card-text">{props.label}</span>
          <span className="blog-card-text1">{props.title}</span>
          <span className="blog-card-text2">{props.description}</span>
        </div>
        <div className="blog-card-container2">
          <div className="blog-card-profile">
            <span className="blog-card-text3">{props.author}</span>
          </div>
          <svg viewBox="0 0 1024 1024" className="blog-card-icon">
            <path
              d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

BlogCard.defaultProps = {
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&h=400',
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  image_alt: 'image',
  author: 'Explore More',
}

BlogCard.propTypes = {
  label: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
}

export default BlogCard
