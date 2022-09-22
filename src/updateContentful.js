import { createClient } from 'contentful'

const updateContentful = () => {
  const client = createClient({
    space: 'txebznzqrwv4',
    accessToken: 'XgdGNgUDlsUUMNFjEWUPmCjLeHtKmoIA3mwFVk4IssM',
    // environment: 'master-2022-04-22',
  })
  const upload = async () => {
    try {
      const newFile = await client.createAssetFromFiles({
        fields: {
          title: {
            'en-US': 'Asset title',
          },
          description: {
            'en-US': 'Asset description',
          },
          file: {
            'en-US': {
              contentType: 'image/svg+xml',
              fileName: 'circle.svg',
              file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>',
            },
          },
        },
      })
      newFile.processForAllLocales()
      newFile.publish()
    } catch (error) {
      console.log(`Error updating: ${error}`)
    }
  }

  return { upload }
}

export default updateContentful
