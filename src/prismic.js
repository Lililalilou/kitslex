import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'kitslex'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    'MC5ZdkVsTXhBQUFDa0EzR0tM.Uu-_vTzvv73vv70WdAZ8SG7vv73vv73vv73vv73vv70z77-977-9au-_vT8j77-9by_vv73vv73vv71JLe-_vQ',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    // {
    //   type: 'homepage',
    //   path: '/',
    // },
  ],
})
