import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useSinglePrismicDocument } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'

import variables from './variables.json'

import church from './assets/Church@Desktop.png'
import dragon from './assets/Dragon@Desktop.png'
import mobDragon from './assets/Dragon@Mobile.png'
import './app.scss'

import Header from './components/Header'
import PostsList from './components/PostsList'

export const App = hot(_App)
export function _App() {
  const [accueil] = useSinglePrismicDocument('accueil')
  const [remerciements] = useSinglePrismicDocument('remerciements')
  return (
    <div className="app">
      <div className="page">
        <Header />
        <h2 className="heading">Accueil</h2>
        <div className="home" height={300}>
          {accueil && <PrismicRichText field={accueil.data.main} />}
        </div>
        <PostsList />
        <h2 className="heading">Remerciements</h2>
        <div className="home" height={300}>
          {remerciements && <PrismicRichText field={remerciements.data.main} />}
        </div>
        <div className="footer">
          <figure className="church">
            <img src={church} />
            <figcaption>
              Jet de volonté : 1d20, le résultat doit être supérieur à 1.
            </figcaption>
          </figure>
          <picture>
            <source
              srcSet={`${dragon} 1180w`}
              media={`(min-width: ${variables.mobileWidth}px)`}
              sizes="1180px"
            />
            <img
              srcSet={`${mobDragon} 720w`}
              sizes={`(max-width: ${variables.mobileWidth - 1}px) 100vw`}
              alt=""
              className="full-width-image dragon"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
