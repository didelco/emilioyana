import React from 'react'
import LangContext from '../contexts/langContext'
import rutaok from '../img/rutaok.png'
import rutano from '../img/rutano.png'
import caminook from '../img/caminook.png'
import caminono from '../img/caminono.png'

export default () => (
  <>
    <div className="content">
      <LangContext.Consumer>
        {lang =>
          lang === 'es' ? (
            <div>
              <h2>CÓMO LLEGAR</h2>
              <p>La dirección del Cigarral es Cerro del Emperador S/N 45002, Toledo.</p>{' '}
              <p>
                Os recordamos que Google comete un error al guiaros hacia el Cigarral de Santa María. Poco antes de llegar al lugar de
                celebración os desvía a un camino de tierra que no va a ningún sitio. Por ello os hemos preparado una corrección del camino
                que debéis seguir, por ejemplo desde la Plaza Zocodover en el centro histórico de Toledo.
              </p>
            </div>
          ) : (
            <div>
              <h2>ANREISE</h2>
              <p>Die Adresse von Cigarral lautet Cerro del Emperador S / N 45002, Toledo</p>{' '}
              <p>
                Wir erinnern Sie daran, dass Google einen Fehler begangen hat, als Sie zur Cigarral de Santa María geführt wurden. Kurz
                bevor Sie am Veranstaltungsort ankommen, werden Sie auf eine unbefestigte Straße umgeleitet, die nirgendwohin führt. Aus
                diesem Grund haben wir eine Korrektur des Pfades vorbereitet, dem Sie folgen müssen, zum Beispiel von der Plaza Zocodover im
                historischen Zentrum von Toledo
              </p>
            </div>
          )
        }
      </LangContext.Consumer>
    </div>
    <div id="indicaciones">
      <img src={rutano} alt="b" />
      <img src={rutaok} alt="a" />
      <img src={caminono} alt="d" />
      <img src={caminook} alt="c" />
    </div>
  </>
)
