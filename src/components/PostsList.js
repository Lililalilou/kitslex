import React, { useEffect } from 'react'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

import variables from '../variables.json'

import pencil from '../assets/Pencil@Desktop.png'
import mobPencil from '../assets/Pencil@Mobile.png'
import './PostsList.scss'

import mimic from '../assets/Mimic@Desktop.png'
import barmaid from '../assets/Barmaid@Desktop.png'

import Post from './Post'

const MAX_ROTATION = 2

const rotations = []
const imagesList = [mimic, barmaid]

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
      <picture>
        <source
          srcSet={`${pencil} 1180w`}
          media={`(min-width: ${variables.mobileWidth}px)`}
          sizes="1180px"
        />
        <img
          srcSet={`${mobPencil} ${variables.mobileWidth}w`}
          sizes={`(max-width: ${variables.mobileWidth - 1}px) 100vw`}
          alt=""
          className={`${!isMobile ? 'full-width-image' : ''} pencil`}
        />
      </picture>
      <h2 className="heading">Actualités</h2>
      {posts &&
        posts.map((post, key) => (
          <Post
            post={post}
            key={post.id}
            mobileView={isMobile}
            rotation={rotations[key]}
            image={imagesList[key % imagesList.length]}
          />
        ))}
    </div>
  )
}

export default PostsList
