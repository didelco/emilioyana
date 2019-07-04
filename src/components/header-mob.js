import React, { useState } from 'react'
import { Link } from 'components/Router'
import LangContext from '../contexts/langContext'
import es from '../img/es.png'
import de from '../img/de.png'
const [menu, openMenu] = useState(false)

const HeaderMob = seti => (
  <>
    <div id="header">
      <div>menu</div>
      <div>
        <h1>Ana & Emilio</h1>
      </div>
    </div>

    {menu && (
      <div id="mobileMenu">
        <LangContext.Consumer>
          {lang =>
            lang === 'es' ? (
              <>
                <nav>
                  <Link to="/">Los novios</Link>
                  <Link to="/llegar">Cómo llegar</Link>
                  <Link to="/ceremonia">La ceremonia</Link>
                  <Link to="/celebracion">La celebración</Link>
                  <Link to="/juegos">Los Juegos</Link>
                  <Link to="/fotos">Galeria</Link>
                </nav>
                <div id="langSelector" onClick={() => seti.seti('de')}>
                  <span>Deutsch</span>
                  <img src={de} alt="flag" height="16px" />
                </div>
              </>
            ) : (
              <>
                <nav>
                  <Link to="/">Die vertraege</Link>
                  <Link to="/llegar">Anreise</Link>
                  <Link to="/ceremonia">Die Zeremonie</Link>
                  <Link to="/celebracion">Die feier</Link>
                  <Link to="/juegos">Die spiele</Link>
                  <Link to="/fotos">Gallerie</Link>
                </nav>
                <div id="langSelector" onClick={() => seti.seti('es')}>
                  <span>Español</span>
                  <img src={es} alt="flag" height="16px" />
                </div>
              </>
            )
          }
        </LangContext.Consumer>
      </div>
    )}
  </>
)

export default HeaderMob
