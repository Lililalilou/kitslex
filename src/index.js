import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import { Provider } from 'react-redux'
//import store from './store'

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import { App } from './App'
import './main.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
    {/* </Provider> */}
  </StrictMode>
)
