import React from 'react'
import { Link } from 'components/Router'
import es from '../img/es.png'
import de from '../img/de.png'
import closeicon from '../img/close.png'
import menuicon from '../img/menu.png'

const LangSelector = data => {
  const invLang = data.lang === 'es' ? 'de' : 'es'
  return (
    <div id="langSelector" onClick={() => data.seti(invLang)}>
      <span>{invLang === 'es' ? 'Español' : 'Deutsch'}</span>
      <img src={invLang === 'es' ? es : de} alt="flag" height="16px" />
    </div>
  )
}

const CloseButton = data => (
  <div id="close" onClick={() => data.toggleMenu()}>
    <img className="closeIcon" src={closeicon} alt="close" />
  </div>
)

const HeaderBlock = data => (
  <div id="header">
    <div id="www">
      <div id="dateandplace">
        6 de Julio 2019 <span className="place">Toledo (Spain)</span>
      </div>
      <LangSelector lang={data.lang} seti={data.seti} />
    </div>
    <h1>Ana & Emilio</h1>
    {data.children}
  </div>
)

const HeaderBlockMob = data => (
  <div id="header-mob">
    <div id="burguer" onClick={() => data.toggleMenu()}>
      <img src={menuicon} alt="menu" />
    </div>
    <h1>Ana & Emilio</h1>
  </div>
)

const NavLinks = data => (
  <nav>
    {data.lang === 'es' ? (
      <>
        <Link to="/">Los novios</Link>
        <Link to="/llegar">Cómo llegar</Link>
        <Link to="/ceremonia">La ceremonia</Link>
        <Link to="/celebracion">La celebración</Link>
        <Link to="/juegos">Los Juegos</Link>
        <Link to="/fotos">Galeria</Link>
      </>
    ) : (
      <>
        <Link to="/">Die vertraege</Link>
        <Link to="/llegar">Anreise</Link>
        <Link to="/ceremonia">Die Zeremonie</Link>
        <Link to="/celebracion">Die feier</Link>
        <Link to="/juegos">Die spiele</Link>
        <Link to="/fotos">Gallerie</Link>
      </>
    )}
  </nav>
)

const NavLinksMov = data => (
  <nav>
    {data.lang === 'es' ? (
      <ul>
        <li>
          <Link to="/" onClick={() => data.toggleMenu()}>
            Los novios
          </Link>{' '}
        </li>
        <li>
          <Link to="/llegar" onClick={() => data.toggleMenu()}>
            Cómo llegar
          </Link>{' '}
        </li>
        <li>
          <Link to="/ceremonia" onClick={() => data.toggleMenu()}>
            La ceremonia
          </Link>{' '}
        </li>
        <li>
          <Link to="/celebracion" onClick={() => data.toggleMenu()}>
            La celebración
          </Link>{' '}
        </li>
        <li>
          <Link to="/juegos" onClick={() => data.toggleMenu()}>
            Los Juegos
          </Link>{' '}
        </li>
        <li>
          <Link to="/fotos" onClick={() => data.toggleMenu()}>
            Galeria
          </Link>{' '}
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/" onClick={() => data.toggleMenu()}>
            Die vertraege
          </Link>{' '}
        </li>
        <li>
          <Link to="/llegar" onClick={() => data.toggleMenu()}>
            Anreise
          </Link>{' '}
        </li>
        <li>
          <Link to="/ceremonia" onClick={() => data.toggleMenu()}>
            Die Zeremonie
          </Link>{' '}
        </li>
        <li>
          <Link to="/celebracion" onClick={() => data.toggleMenu()}>
            Die feier
          </Link>{' '}
        </li>
        <li>
          <Link to="/juegos" onClick={() => data.toggleMenu()}>
            Die spiele
          </Link>{' '}
        </li>
        <li>
          <Link to="/fotos" onClick={() => data.toggleMenu()}>
            Gallerie
          </Link>{' '}
        </li>
      </ul>
    )}
  </nav>
)

const MenuDiv = data => (
  <div id="mobileMenu">
    <CloseButton toggleMenu={data.toggleMenu} />
    <div className="mobileMenuContent">
      <NavLinksMov lang={data.lang} toggleMenu={data.toggleMenu} />
      <LangSelector lang={data.lang} seti={data.seti} />
    </div>
  </div>
)

const CompMob = data => (
  <>
    <HeaderBlockMob toggleMenu={data.toggleMenu} />
    {data.menu && <MenuDiv lang={data.lang} seti={data.seti} toggleMenu={data.toggleMenu} />}
  </>
)

const Comp = data => (
  <>
    <HeaderBlock lang={data.lang} seti={data.seti}>
      <NavLinks lang={data.lang} />
    </HeaderBlock>
  </>
)

const Header = data => {
  return (
    <div>
      {data.width < 800 ? (
        <CompMob lang={data.lang} seti={data.seti} toggleMenu={data.toggleMenu} menu={data.menu} />
      ) : (
        <Comp lang={data.lang} seti={data.seti} />
      )}
    </div>
  )
}

export default Header
