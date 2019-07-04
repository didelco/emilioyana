import React from 'react'
import LangContext from '../contexts/langContext'

export default () => (
  <>
    <div className="content">
      <LangContext.Consumer>
        {lang =>
          lang === 'es' ? (
            <div>
              <h2>LA CEREMONIA</h2>
              <p>
                Querida familia: El Cigarral de Santa María en Toledo es el escenario escogido para la ceremonia y la celebración. La cita
                es a las 12.30 en la entrada del Cigarral, donde os indicarán cómo llegar al lugar de la ceremonia. Una vez allí, sólo hay
                dos sillas reservadas para las madrinas y la madre de Ana, así que tomaremos asiento para esperar a que llegue la novia y
                comience la ceremonia, lo que ocurrirá sobre las 13.00 horas. Durante la ceremonia harán un pequeño discurso varias
                personas: Ele y Rafa y Silvia y Caro en español, Jacky y Robin en alemán. Cuando todo termine, los niños repartirán pétalos
                de rosa para lanzar a la salida de los novios.
              </p>
            </div>
          ) : (
            <div>
              <h2>DIE ZEREMONIE</h2>
              <p>
                Liebe Familie, der Cigarral de Santa María in Toledo ist der Schauplatz für die Zeremonie und das Fest. Der Termin ist um
                12.30 Uhr am Eingang des Cigarral. Dort erfahren Sie, wie Sie zum Ort der Zeremonie gelangen. Dort angekommen, sind nur noch
                zwei Stühle für die Patinnen reserviert. Wir nehmen Platz, um auf die Ankunft der Braut zu warten und die Zeremonie zu
                beginnen, die gegen 13:00 Uhr stattfinden wird. Während der Zeremonie halten mehrere Personen eine kleine Rede: Ele und Rafa
                und Silvia und Caro auf Spanisch, Jacky und Robin auf Deutsch. Wenn alles vorbei ist, verteilen die Kinder Rosenblätter, um
                sie bei der Abreise des Paares zu werfen.
              </p>
            </div>
          )
        }
      </LangContext.Consumer>
    </div>
  </>
)
