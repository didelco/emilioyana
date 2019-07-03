import React from 'react'
import hero from '../img/header.jpeg'
import LangContext from '../contexts/langContext'

export default () => (
  <>
    <img id="hero" class="fullwidth" src={hero} alt="a" />
    <div className="content-index">
      <LangContext.Consumer>
        {lang =>
          lang === 'es' ? (
            <div>
              <p>
                Érase una vez, un chico y una chica que crecieron en reinos muy lejanos... crecieron mucho, mucho y decidieron ser felices y
                comer perdices.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Es war einmal, ein Junge und ein Mädchen, die in sehr fernen Gefilden aufwuchsen ... wuchsen sehr, sehr und beschlossen,
                glücklich zu sein und Rebhühner zu essen.
              </p>
            </div>
          )
        }
      </LangContext.Consumer>
    </div>
  </>
)
