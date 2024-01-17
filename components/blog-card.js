import React from 'react'

import PropTypes from 'prop-types'

const BlogCard = (props) => {
  return (
    <>
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
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-card-blog-post-card {
            flex: 1 1;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-card-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          .blog-card-container {
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-card-container1 {
            flex: 1;
            width: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-card-text {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-card-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-card-text2 {
            color: var(--dl-color-gray-500);
            width: 100%;
            height: 100%;
            font-size: 1rem;
            align-self: flex-start;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-card-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-card-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-card-text3 {
            font-weight: 300;
            text-decoration: underline;
          }
          .blog-card-icon {
            width: 24px;
            height: 24px;
          }

          .blog-card-root-class-name3 {
            flex: 1;
            align-self: flex-start;
          }

          .blog-card-root-class-name5 {
            flex: 1;
            align-self: flex-start;
          }
          @media (max-width: 1200px) {
            .blog-card-container1 {
              height: 25vw;
              margin-bottom: 5%;
            }
          }
          @media (max-width: 991px) {
            .blog-card-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
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
