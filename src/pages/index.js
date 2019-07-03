import React from 'react'
import hero from '../img/header.jpeg'
import Header from '../components/header'

export default () => (
  <>
    <Header />
    <div className="content-index">
      <img id="hero" class="fullwidth" src={hero} />
      <h3>La ceremonia</h3>
      <br />
      <br />
      <br />
      <h3>La celebración</h3>
      <br />
      <br />
      <br />
      <h3>Los Juegos</h3>
    </div>
  </>
)
