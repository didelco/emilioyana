import React from 'react'
import { Link } from 'components/Router'

export default () => (
  <div className="content-juego">
    <div className="back">
      <Link to="/juegos">{`< Volver a Juegos`}</Link>
    </div>

    <h2>El Elvis de Toledo</h2>
    <p>React Static is a progressive static site generator for React.</p>
  </div>
)
