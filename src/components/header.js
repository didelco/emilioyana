import React from 'react'
import { Link } from 'components/Router'

export default () => (
  <div id="header">
    <div id="www">
      <div>6 de Julio 2019</div> <div>Toledo (Spain)</div>
      <div>#emilioyanasecasan</div>
    </div>
    <div>
      <h1>Emilio & Ana</h1>
    </div>
    <nav>
      <Link to="/">Indice</Link>
      <Link to="/ceremonia">Ceremonia</Link>
      <Link to="/celebracion">Celebración</Link>
      <Link to="/juegos">Juegos</Link>
      <Link to="/fotos">Fotos</Link>
    </nav>
  </div>
)
