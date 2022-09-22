import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSinglePrismicDocument } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'

import church from './assets/Church@Desktop.png'
import dragon from './assets/Dragon@Desktop.png'
import mobDragon from './assets/Dragon@Mobile.png'
import './app.scss'

import Header from './components/Header'
import PostsList from './components/PostsList'
// import Pictures from './components/Pictures'

export const App = hot(_App)
export function _App() {
  const [accueil] = useSinglePrismicDocument('accueil')
  return (
    <div className="app">
      <div className="page">
        <Header />
        <h2 className="heading">Accueil</h2>
        <div className="accueil" height={300}>
          {accueil && <PrismicRichText field={accueil.data.main} />}
        </div>
        <PostsList />
        <div className="footer">
          <figure className="church">
            <img src={church} />
            <figcaption>
              Jet de volonté : 1d20, le résultat doit être supérieur à 1.
            </figcaption>
          </figure>
          <img
            srcSet={`${mobDragon} 720w, ${dragon} 1180w`}
            sizes="(max-width: 360px) 360px, 1180px"
            src={dragon}
            alt=""
            className="full-width-image dragon"
          ></img>
        </div>
      </div>
    </div>
  )
}
