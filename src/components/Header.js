import title from '../assets/Title.png'
import characters from '../assets/Characters@Desktop.png'
import { useEffect } from 'react'
import mobCharacters from '../assets/Characters@Mobile.png'
import dice from '../assets/Dice@Desktop.png'
import mobDice from '../assets/Dice@Mobile.png'

import './Header.scss'

// const { innerWidth } = window
// let currentInnerWidth
// const getInnerWidth = () => {
//   console.log(innerWidth)
//   return currentInnerWidth === innerWidth
// }

const Header = () => {
  // useEffect(() => {
  //   getInnerWidth()
  // }, [currentInnerWidth])
  return (
    <div className="header">
      <img src={title} className="header__title" />
      <picture>
        <source
          srcSet={`${characters} 1180w`}
          media="(min-width: 680px)"
          sizes="(max-width: 1180px) 100vw, 1180px"
        />
        <img
          srcSet={`${mobCharacters} 720w`}
          sizes="(max-width: 679px) 100vw"
          alt=""
          className="header__characters"
        />
      </picture>
      <div className="header__heros">
        <div className="sheet">
          <div className="sheet__props">
            <div>Nom</div>
            <div>Spécialité</div>
          </div>
          <div className="sheet__id">
            <div>Élise</div>
            <div>Dormeuse</div>
          </div>
          <img src="http://placekitten.com/88/104" alt="" />
        </div>
        <div className="and">&</div>
        <div className="sheet">
          <div className="sheet__props">
            <div>Nom</div>
            <div>Spécialité</div>
          </div>
          <div className="sheet__id">
            <div>Alexandre</div>
            <div>Mangeur</div>
          </div>
          <img src="http://placekitten.com/88/104" alt="" />
        </div>
      </div>
      <div className="header__event">
        {/* <img
          srcSet={`${mobDice} 720w, ${dice} 1184w`}
          sizes="(max-width: 360px) 360px, 1180px"
          src={mobDice}
          alt=""
          className="header__dice"
        ></img> */}
        <picture>
          <source
            srcSet={`${dice} 1184w`}
            media="(min-width: 680px)"
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
          <img
            srcSet={`${mobDice} 720w`}
            sizes="(max-width: 679px) 100vw"
            alt=""
            className="header__dice"
          />
        </picture>
        <svg
          className="header__arrow"
          width="50"
          height="32"
          viewBox="0 0 50 32"
        >
          <path d="M9.06177 2.14313C9.81134 2.49587 10.133 3.38947 9.7803 4.13905C8.99683 5.80393 8.03601 7.39846 7.05407 8.93683C7.72259 8.71306 8.38744 8.52996 9.02631 8.3626C9.25395 8.30296 9.47584 8.24591 9.69377 8.18987C10.2679 8.04225 10.8147 7.90165 11.3669 7.7395C16.6518 6.1876 21.9147 6.21785 27.2408 7.55514C32.0975 8.77457 37.3554 11.1724 41.4303 14.7179C45.519 18.2754 48.4986 23.0722 48.4986 29.0149C48.4986 29.8434 47.827 30.5149 46.9986 30.5149C46.1702 30.5149 45.4986 29.8434 45.4986 29.0149C45.4986 24.174 43.0948 20.1428 39.461 16.9811C35.8134 13.8074 31.0098 11.5946 26.5102 10.4648C21.6514 9.24485 16.9354 9.231 12.2122 10.618C11.6072 10.7956 10.987 10.9551 10.3969 11.1068C10.189 11.1602 9.98493 11.2127 9.78655 11.2647C9.3775 11.3718 8.98197 11.4794 8.59719 11.5948C8.74605 11.6463 8.89357 11.7031 9.03921 11.7655C9.69248 12.0455 10.2388 12.483 10.6352 12.8126C10.7334 12.8944 10.8231 12.9698 10.9063 13.0399C11.2097 13.2952 11.4267 13.4779 11.6583 13.6253C12.3572 14.07 12.5632 14.9971 12.1185 15.6961C11.6737 16.395 10.7466 16.601 10.0477 16.1562C9.62879 15.8897 9.21664 15.5411 8.90102 15.2741C8.83514 15.2184 8.77346 15.1663 8.71681 15.1191C8.32847 14.7962 8.07315 14.6154 7.85745 14.5229C7.2342 14.2558 6.42927 14.1329 5.45942 14.0962C4.829 14.0724 4.24528 14.0845 3.6407 14.0972C3.27329 14.1048 2.89799 14.1127 2.5 14.1127C1.67157 14.1127 1 13.4411 1 12.6127C1 11.9619 1.41439 11.4079 1.99369 11.2003C2.04503 11.1195 2.10407 11.0436 2.17009 10.9738C2.66605 10.1809 3.16054 9.42253 3.64475 8.67995C4.90683 6.74443 6.0991 4.91599 7.06584 2.86166C7.41859 2.11208 8.31219 1.79038 9.06177 2.14313Z" />
        </svg>
      </div>
    </div>
  )
}

export default Header
