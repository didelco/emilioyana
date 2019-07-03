import React from 'react'
import Gallery from 'react-photo-gallery'
import fotos from '../img/cam.png'

const photos = [
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4,
  },
]

const BasicRows = () => <Gallery photos={photos} />

export default () => (
  <>
    <div className="content">
      <img src={fotos} alt="fotos" width="180px" style={{ marginBottom: '20px' }} />
    </div>
    <BasicRows />
  </>
)
