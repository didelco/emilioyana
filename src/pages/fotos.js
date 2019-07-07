import React from 'react'
import Gallery from 'react-photo-gallery'
import fotos from '../img/cam.png'
import a01 from '../img/galeria/a01.jpg'
import a02 from '../img/galeria/a02.jpg'
import a03 from '../img/galeria/a03.jpg'
import a04 from '../img/galeria/a04.jpg'
import a05 from '../img/galeria/a05.jpg'
import a06 from '../img/galeria/a06.jpg'
import a07 from '../img/galeria/a07.jpg'
import a08 from '../img/galeria/a08.jpg'
import a09 from '../img/galeria/a09.jpg'
import a10 from '../img/galeria/a10.jpg'
import a11 from '../img/galeria/a11.jpg'
import a12 from '../img/galeria/a12.jpg'
import a13 from '../img/galeria/a13.jpg'
import a14 from '../img/galeria/a14.jpg'
import a15 from '../img/galeria/a15.jpg'
import a16 from '../img/galeria/a16.jpg'
import a17 from '../img/galeria/a17.jpg'
import a18 from '../img/galeria/a18.jpg'
import a19 from '../img/galeria/a19.jpg'
import a20 from '../img/galeria/a20.jpg'
import a21 from '../img/galeria/a21.jpg'
import a22 from '../img/galeria/a22.jpg'
import a23 from '../img/galeria/a23.jpg'
import a24 from '../img/galeria/a24.jpg'
import a25 from '../img/galeria/a25.jpg'
import a26 from '../img/galeria/a26.jpg'
import a27 from '../img/galeria/a27.jpg'
import a28 from '../img/galeria/a28.jpg'
import a29 from '../img/galeria/a29.jpg'
import a30 from '../img/galeria/a30.jpg'
import a31 from '../img/galeria/a31.jpg'
import a32 from '../img/galeria/a32.jpg'
import a33 from '../img/galeria/a33.jpg'

const photos = [
  { src: a28, width: 1, height: 1 },
  { src: a07, width: 3, height: 2 },
  { src: a10, width: 2, height: 3 },
  { src: a20, width: 3, height: 2 },
  { src: a15, width: 2, height: 3 },
  { src: a29, width: 2, height: 3 },
  { src: a16, width: 3, height: 2 },
  { src: a17, width: 3, height: 2 },
  { src: a11, width: 3, height: 2 },
  { src: a33, width: 3, height: 2 },
  { src: a23, width: 3, height: 2 },
  { src: a12, width: 3, height: 2 },
  { src: a13, width: 3, height: 2 },
  { src: a03, width: 2, height: 3 },
  { src: a14, width: 2, height: 3 },
  { src: a29, width: 2, height: 3 },
  { src: a22, width: 3, height: 2 },
  { src: a08, width: 3, height: 2 },
  { src: a24, width: 2, height: 3 },
  { src: a06, width: 2, height: 3 },
  { src: a14, width: 2, height: 3 },
  { src: a26, width: 3, height: 2 },
  { src: a06, width: 2, height: 3 },
  { src: a30, width: 1, height: 1 },
  { src: a09, width: 3, height: 2 },
  { src: a18, width: 3, height: 2 },
  { src: a19, width: 3, height: 2 },
  { src: a27, width: 1, height: 1 },
  { src: a21, width: 3, height: 2 },
  { src: a31, width: 1, height: 1 },
  { src: a32, width: 3, height: 2 },
  { src: a01, width: 3, height: 2 },
  { src: a25, width: 3, height: 2 },
  { src: a04, width: 2, height: 3 },
  { src: a05, width: 2, height: 3 },
  { src: a13, width: 3, height: 2 },
  { src: a02, width: 3, height: 2 },
  { src: a22, width: 3, height: 2 },
]

const BasicRows = () => <Gallery photos={photos} />

export default () => (
  <>
    <div className="content">
      <img src={fotos} alt="fotos" width="180px" style={{ marginBottom: '20px' }} />
    </div>
    <BasicRows />

    <a href="https://photos.app.goo.gl/jrkW5v69m9inYgHr6" target="_blank">
      Todas las fotos / Alle Fotos
    </a>
  </>
)
