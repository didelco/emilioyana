import React from 'react'
import Header from '../components/header'
import { Link } from 'components/Router'

export default () => (
  <>
    <Header />
    <div className="content">
      <h2>Juegos</h2>
      <p>Estos son las instrucciones de los diferentes juegos que realizaremos durante la celebración.</p>
      <ul>
        <Link to="/juego-pinza">
          <li>La Pinza</li>
        </Link>
        <Link to="/juego-fotos">
          <li>Fotos</li>
        </Link>
        <Link to="/juego-canciones">
          <li>Canciones</li>
        </Link>
        <Link to="/juego-silla">
          <li>Silla</li>
        </Link>
      </ul>
    </div>
  </>
)
