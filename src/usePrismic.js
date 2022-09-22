import { useAllPrismicDocumentsByType } from '@prismicio/react'

export function getPosts() {
  const [posts] = useAllPrismicDocumentsByType('blog-post')
  console.log('post', posts)
  return posts
}
