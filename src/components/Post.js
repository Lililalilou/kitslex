import { PrismicRichText, PrismicImage } from '@prismicio/react'

import mimic from '../assets/Mimic@Desktop.png'
import mobMimic from '../assets/Mimic@Mobile.png'
import './Post.scss'

const Post = ({ post, rotation, mobileView }) => {
  const event = new Date(post.data.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const postDate = `Le ${event.toLocaleDateString(undefined, options)}`
  return (
    <div className="post">
      {post.data.image && (
        <PrismicImage
          field={post.data.image}
          widths={[900]}
          imgixParams={{
            auto: 'format',
            height: '300',
            fit: 'facearea',
          }}
          className="post__image"
          style={{ ['--post-header-rotation']: `${rotation}deg` }}
        />
      )}
      <div className="post__content">
        <h4 className="post__content-title">{post.data.title[0].text}</h4>
        <span className="post__content-date">{postDate}</span>
        <PrismicRichText field={post.data.content} />
        <img
          srcSet={`${mobMimic} 720w, ${mimic} 1180w`}
          sizes="(max-width: 360px) 360px, 1180px"
          src={mimic}
          alt=""
          className={`${!mobileView ? 'full-width-image' : ''} mimic`}
        />
      </div>
    </div>
  )
}

export default Post
