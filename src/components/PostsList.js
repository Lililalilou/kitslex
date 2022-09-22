import React, { useEffect } from 'react'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

import pencil from '../assets/Pencil@Desktop.png'
import mobPencil from '../assets/Pencil@Mobile.png'
import './PostsList.scss'

import Post from './Post'

const MAX_ROTATION = 2

const rotations = []

for (let i = 0; i < 10; i++) {
  rotations.push(Math.random() * MAX_ROTATION * (i % 2 ? -1 : 1))
}
const { innerWidth } = window
let isMobile

const PostsList = () => {
  const [posts] = useAllPrismicDocumentsByType('blog_post')
  useEffect(() => {
    if (innerWidth < 1180) {
      isMobile = true
    }
  }, [innerWidth])
  return (
    <div className="posts-list">
      <img
        srcSet={`${mobPencil} 720w, ${pencil} 1180w`}
        sizes="(max-width: 360px) 360px, 1180px"
        src={pencil}
        alt=""
        className={`${!isMobile ? 'full-width-image' : ''} pencil`}
      />
      <h2 className="heading">Actualités</h2>
      {posts &&
        posts.map((post, key) => (
          <Post
            post={post}
            key={post.id}
            mobileView={isMobile}
            rotation={rotations[key]}
          />
        ))}
    </div>
  )
}
export default PostsList
