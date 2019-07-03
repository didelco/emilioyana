import React from 'react'
import { Link } from 'components/Router'

export default () => (
  <div id="footer">
    <nav>
      <Link to="/">Indice</Link>
      <Link to="/ceremonia">Ceremonia</Link>
      <Link to="/celebracion">Celebración</Link>
      <Link to="/juegos">Juegos</Link>
      <Link to="/fotos">Fotos</Link>
    </nav>
    <div>
      <h4>Encantados de disfrutar con vosotros</h4>
    </div>
  </div>
)
