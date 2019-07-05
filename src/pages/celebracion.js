import React from 'react'
import LangContext from '../contexts/langContext'

export default () => (
  <div className="content">
    <LangContext.Consumer>
      {lang =>
        lang === 'es' ? (
          <div>
            <h2>LA CELEBRACIÓN</h2>
            <p>
              La boda de Emilio y Ana estará llena de sorpresas, por lo que no vamos a desvelar mucho sobre la celebración. Para que no os
              despisteis, sólo debéis saber que tras la ceremonia se celebrará un coctel y después se pasará al salón donde empezará la
              comida. En el transcurso de esta, hemos organizado algunos juegos que explicamos en el apartado Juegos de esta página. Podéis
              consultar cualquier duda a las madrinas, Tanya e Isabel. Todo lo demás... misterio y diversión!! ☺️
            </p>
            <p>En todo el recinto del Cigarral hay WIFI abierta, no necesita contraseña.</p>
          </div>
        ) : (
          <div>
            <h2>DIE FEIER</h2>
            <p>
              Die Hochzeit von Emilio und Ana wird voller Überraschungen sein, daher werden wir nicht viel über die Feier verraten. Damit
              Sie sich nicht verlaufen, sollten Sie nur wissen, dass nach der Zeremonie ein Aperitif abgehalten wird und Sie dann in den
              Raum gehen, in dem das Essen beginnen wird. Im Zuge dessen haben wir einige Spiele organisiert, die wir im Abschnitt Spiele
              auf dieser Seite erklären. Sie können Fragen an die Patinnen Tanya und Isabel wenden. Alles andere ... Rätsel und Spaß !! ☺️
            </p>
            <p>Im gesamten Cigarral ist WLAN offen, Sie benötigen kein Passwort.</p>
          </div>
        )
      }
    </LangContext.Consumer>
  </div>
)
