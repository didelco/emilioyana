import React from 'react'
import { Link } from 'components/Router'
import LangContext from '../contexts/langContext'
import es from '../img/es.png'
import de from '../img/de.png'

const Header = seti => (
  <div id="header">
    <div id="www">
      <div id="dateandplace">
        6 de Julio 2019 <span className="place">Toledo (Spain)</span>
      </div>
      <div>
        <LangContext.Consumer>
          {LangContext => {
            const invLang = LangContext === 'es' ? 'de' : 'es'
            return (
              <div id="langSelector" onClick={() => seti.seti(invLang)}>
                <span>{invLang === 'es' ? 'Español' : 'Deutsch'}</span>
                <img src={invLang === 'es' ? es : de} alt="flag" height="16px" />
              </div>
            )
          }}
        </LangContext.Consumer>
      </div>
    </div>
    <div>
      <h1>Ana & Emilio</h1>
    </div>

    <LangContext.Consumer>
      {lang =>
        lang === 'es' ? (
          <nav>
            <Link to="/">Los novios</Link>
            <Link to="/llegar">Cómo llegar</Link>
            <Link to="/ceremonia">La ceremonia</Link>
            <Link to="/celebracion">La celebración</Link>
            <Link to="/juegos">Los Juegos</Link>
            <Link to="/fotos">Galeria</Link>
          </nav>
        ) : (
          <nav>
            <Link to="/">Die vertraege</Link>
            <Link to="/llegar">Anreise</Link>
            <Link to="/ceremonia">Die Zeremonie</Link>
            <Link to="/celebracion">Die feier</Link>
            <Link to="/juegos">Die spiele</Link>
            <Link to="/fotos">Gallerie</Link>
          </nav>
        )
      }
    </LangContext.Consumer>
  </div>
)

export default Header
