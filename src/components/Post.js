import { PrismicRichText, PrismicImage } from '@prismicio/react'

import separator from '../assets/ArticlesSeparator.png'
import './Post.scss'

const Post = ({ post, rotation, mobileView, image }) => {
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
        {post.data.gallery &&
          post.data.gallery.map((element, key) => (
            <PrismicImage
              key={key}
              className="post__galleryElement"
              field={element.photo}
              widths={[300]}
              imgixParams={{
                auto: 'format',
                height: '300',
                fit: 'clamp',
              }}
            />
          ))}
        <div
          className="post__bg post__bg__left"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="post__bg post__bg__right"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="post__separator">
        <img src={separator} alt="" />
      </div>
    </div>
  )
}

export default Post
