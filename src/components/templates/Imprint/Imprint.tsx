import {FC} from 'react'
import {Field} from '@snek-at/jaen'
import {Container} from '@chakra-ui/react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'

interface IImprintProps {}

const Imprint: FC<IImprintProps> = () => {
  return (
    <>
      <Container
        maxW={CONTAINER_MAX_WIDTH}
        mt={{base: '10', md: '20'}}
        mb={{base: '10', md: '20'}}
        pt={{base: '5', md: '10'}}
        pb={{base: '5', md: '10'}}>
        <Field.Text
          name="heroHeadingBallons"
          defaultValue="
        <h1>Ballons & Ballons e.U.</h1>
        <p>Inhaber Mag. Nikolai Dallinger</p>
        
        <p>
        Taborstraße 98<br/>
        1020 Wien<br/>
        Austria
        </p>
        
        <p>
        Tel.: +43-(0)1-2163425<br/>
        office@ballons-ballons.com<br/>
        www.ballons-ballons.com
        </p>

        <p>
        FN: 417704x<br/>
        UID-Nr.: ATU68775079<br/>
        Firmensitz Wien<br/>
        Handelsgericht Wien
        </p>
        
         
        
        <p>Sämtliche Texte auf der Website wurden sorgfältig geprüft. Dessen ungeachtet kann keine Garantie für Richtigkeit, Vollständigkeit und Aktualität der Angaben übernommen werden. Die Inhalte dieser Website dürfen weder ganz noch teilweise ohne vorherige Genehmigung des Urhebers zu kommerziellen Zwecken vervielfältigt und/oder in Informationssystemen, die zur Datenweitergabe genutzt werden, gespeichert werden.  Schadensersatzansprüche wegen direkter oder indirekter Schäden, die aus der Benutzung der WWW-Dokumente entstehen, können nicht gegen den WWW-Verantwortlichen oder den Autor geltend gemacht werden. Sofern in dem Dokument durch Hyperlinks auf kommerzielle Websites verwiesen wird, stellt dies keine Empfehlung dar. Diese Links sollen nur eine (unvollständige) Auswahl von Möglichkeiten aufzeigen. Ein Anspruch von nicht berücksichtigten Websites auf Aufnahme in das Dokument besteht deshalb nicht. Für Informationen, die über externe Querverweise (Hyperlinks) erreicht werden, wird keine Gewähr übernommen.</p>
        
        <h2>Datenschutz</h2>
        <p>Wir verpflichten uns, die Privatsphäre aller Personen zu schützen, die unsere Site nutzen, und die persönlichen Daten, die uns von Kunden, Partnern und Interessenten überlassen werden, vertraulich zu behandeln. Grundsätzlich können Sie unsere Website jederzeit besuchen und durchblättern, ohne persönliche Informationen anzugeben. Persönliche Daten, die Sie uns über Registrierung auf unserer Site mitteilen, werden weder verkauft noch Dritten überlassen, sondern sind ausschließlich zur unternehmensinternen Verwendung bestimmt.</p>
        
        <h2>Google Analytics</h2>
        <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>"
        />
      </Container>
    </>
  )
}
export default Imprint
