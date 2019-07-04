import React from 'react'
import LangContext from '../contexts/langContext'
import pinza from '../img/j-pinza.jpg'
import fotos from '../img/j-foto.jpg'
import baile from '../img/j-baile.jpg'

export default () => (
  <>
    <div className="content">
      <LangContext.Consumer>
        {lang =>
          lang === 'es' ? (
            <div>
              <h2>LOS JUEGOS</h2>
              <p>Durante la boda hemos organizado algunos juegos y queríamos explicarlos antes para que todos entendamos cómo se juega.</p>
              <ul className="list-games">
                <a href="#espinza">
                  <li>LA PINZAS DE LA SUERTE</li>
                </a>
                <a href="#esfoto">
                  <li>FOTOS LOCAS</li>
                </a>
                <a href="#esbaile">
                  <li>EL ELVIS DE TOLEDO</li>
                </a>
              </ul>
              <div id="espinza">
                <h3 className="titjuego"> LA PINZAS DE LA SUERTE</h3>
                <img src={pinza} alt="pinza" />
                <p>
                  También durante la comida, se repartirá una pinza de la ropa a cada mesa. El objetivo es intentar que no te enganchen a tí
                  la pinza por detrás sin que te des cuenta. Así que si te la han puesto, hay que buscar otro despistado al que ponerle la
                  pinza sin que lo note...en un momento dado se escuchará la canción The end de The Doors y los que lleven la pinza en ese
                  momento, junto con sus parejas, nos deleitarán con un baile especial cuando bajemos a la pista de baile! 🕺🏻 👯 Los que
                  mejor lo hagan, recibirán un premio a la hora de la cena 🏆
                </p>
              </div>
              <div id="esfoto">
                <h3 className="titjuego"> FOTOS LOCAS </h3>
                <img src={fotos} alt="foto" />
                <p>
                  También a la hora de la cena daremos un premio a la mejor foto de la boda: la más graciosa, romántica, divertida...
                  podréis enviar vuestras fotos directamente al WhatsApp de la boda y nuestro sesudo jurado elegirá la mejor, que se llevará
                  el premio 🥇. Después las subiremos a la web de la boda.
                </p>
              </div>
              <div id="esbaile">
                <h3 className="titjuego"> EL ELVIS DE TOLEDO </h3>
                <img src={baile} alt="baile" />
                <p>
                  En primer lugar, durante la comida, encontraréis en cada mesa una tarjeta en la que se os indicará una canción. Las
                  canciones que hemos escogido son estas (para que las reconozcais): En cualquier momento de la comida puede sonar de
                  repente esa canción y los componentes de la mesa tienen que levantarse y bailar. La mesa que mejor lo haga se llevará un
                  bonito premio 😊
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h2>DIE SPIELE</h2>
              <p>
                Während der Hochzeit haben wir einige Spiele organisiert und wollten sie vorher erklären, damit wir alle verstehen, wie man
                spielt.
              </p>
              <ul className="list-games">
                <a href="#depinza">
                  <li>DIE GLÜCKSSPRECHEN</li>
                </a>
                <a href="#defoto">
                  <li>DIE VERRÜCKTEN FOTOS</li>
                </a>
                <a href="#debaile">
                  <li>DIE TANZTISCHE</li>
                </a>
              </ul>
              <div id="depinza">
                <h3 className="titjuego">DIE GLÜCKSSPRECHEN</h3>
                <img src={pinza} alt="pinza" />
                <p>
                  Auch während des Essens wird eine Wäscheklammer auf jeden Tisch verteilt. Das Ziel ist es, dass Sie die Zange nicht von
                  hinten erwischen, ohne dass Sie es merken. Also, wenn Sie es gesagt haben, müssen Sie eine andere ahnungslose Stelle
                  finden, um den Clip abzuspielen, ohne dass Sie es bemerken. Zu einem bestimmten Zeitpunkt hören Sie das Lied The End der
                  The Doors und diejenigen, die zu diesem Zeitpunkt die Klammer tragen Wenn wir auf die Tanzfläche gehen, werden wir uns
                  zusammen mit ihren Partnern mit einem besonderen Tanz freuen! 🕺🏻👯 Wer das Beste tut, erhält zum Abendessen einen Preis🏆
                </p>
              </div>
              <div id="defoto">
                <h3 className="titjuego">DIE VERRÜCKTEN FOTOS</h3>
                <img src={fotos} alt="foto" />
                <p>
                  Auch zum Abendessen vergeben wir einen Preis für das beste Hochzeitsfoto: das lustigste, romantischste, lustigste ... Sie
                  können Ihre Fotos direkt an die WhatsApp der Hochzeit senden, und unsere hochbegabte Jury wählt das Beste aus, das die
                  preis🥇. Dann werden wir sie auf die Hochzeitswebsite hochladen.
                </p>
              </div>
              <div id="debaile">
                <h3 className="titjuego">DIE TANZTISCHE</h3>
                <img src={baile} alt="baile" />
                <p>
                  Zuallererst finden Sie während des Essens auf jedem Tisch eine Karte, auf der ein Lied angezeigt wird. Die Songs, die wir
                  ausgewählt haben, sind die folgenden (damit Sie sie erkennen können): Zu jeder Zeit des Essens kann dieses Lied plötzlich
                  erklingen und die Mitglieder des Tisches müssen aufstehen und tanzen. Der Tisch, der das am besten kann, wird einen
                  schönen Preis erhalten
                </p>
              </div>
            </div>
          )
        }
      </LangContext.Consumer>
      <iframe
        src="https://www.youtube.com/embed/9Gc4QTqslN4?start=32"
        frameBorder="0"
        allow=" autoplay; encrypted-media"
        allowFullScreen
        title="bird is the word"
      />
      <iframe
        src="https://www.youtube.com/embed/18v1nAoTVw8?start=28"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />{' '}
      <iframe
        src="https://www.youtube.com/embed/cn69NJ-XNv0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <iframe
        src="https://www.youtube.com/embed/ARt9HV9T0w8?start=13"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <iframe
        src="https://www.youtube.com/embed/sOnqjkJTMaA?start=570"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
    </div>
  </>
)
