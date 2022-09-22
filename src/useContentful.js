import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const useContentful = () => {
  const client = createClient({
    space: 'txebznzqrwv4',
    accessToken: 'XgdGNgUDlsUUMNFjEWUPmCjLeHtKmoIA3mwFVk4IssM',
  })

  const getPosts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'blogPost',
        select: 'fields',
      })
      console.log('entries', entries)
      const sanitizedEntries = entries.items.map((item) => {
        const body = documentToHtmlString(item.fields.body)
        const id = item.sys.id
        return {
          ...item.fields,
          body,
          id,
        }
      })
      return sanitizedEntries
    } catch (error) {
      console.log(`Error fetching posts: ${error}`)
    }
  }

  return { getPosts }
}

export default useContentful
