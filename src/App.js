import { React } from 'react';
import './App.scss';

const App = () => {

  return (
    <body>
      <header>

      </header>

      <section className="presentation">
        <h1 className="h1">
          Luftkondensierte<br />
          Kältemaschinen<br />
          & Kaltwassersätze<br />
        </h1>
        <div className="decoration-line"></div>
        <p className="text">Aufgrund der kompakten Bauart
          werden platzsparende luftkondensierte Kompressionskältemaschinen
          (umgangsspr. „Kaltwassersätze“)
          vielseitig zur Prozesskühlung und Gebäudeklimatisierung eingesetzt.
        </p>
      </section>

      <section className="energy-efficiency">
        <h2 className="h2">ENERGIEEFFIZIENZ IM FOKUS</h2>
        <p className="text">
          Bei der Anschaffung sollte deshalb besonders auf energieeffiziente Systeme geachtet werden, denn die Betriebskosten der Anlage überschreiten erfahrungsgemäß über die Lebensdauer hinweg die einmaligen
          Anschaffungskosten um ein vielfaches.
          Insofern sind die Themen Kompressortechnik und Einsatz von Freikühlung von besonderer Bedeutung, sowie Steuer- und Regelungstechnik besonders wichtig.
        </p>
      </section>

      <section>
        <h2>MODERNSTE STANDARDS</h2>
        <p>Aktuelle Richtlinien und Verordnungen bezüglich des Kältemittel Phase-Downs müssen berücksichtigt werden.
          Der langfristige Einsatz des Kältemittels muss sowohl nach ökonomischen als auch strategischen
          Gesichtspunkten entschieden werden.
          Alle unsere Kältemaschinen entsprechen dem modernsten Stand
          der Technik und werden in den unterschiedlichsten Branchen eingesetzt.
          Unser Angebot umfasst ein breites Sortiment an natürlichen und frigenen Kältemitteln,
          die den aktuellsten Normen und Verordnungen entsprechen.
        </p>
      </section>

      <section className="speciality">
        <h2>Unsere Spezialität besteht aus unseren Kaltwassersätzen mit integrierter Freikühleinheit.</h2>
        <p>Doppelkanal Mikrochannel Wärmetauscher kühlen das Prozesswasser energiesparend über ambiente Umgebungsluft.</p>
        <p>Nur bei heißen Außentemperaturen erfolgt die Umschaltung auf Kompressionskälteerzeugung.
          Diese Maximierung der Freikühlzeit erzielt größtmögliche Kosteneinsparungen auch bei kleinen Nennleistungen.</p>

      </section>

      <section className="advantages">
        <h2 className="h2">IHRE VORTEILE</h2>
        <ul className="advantages-list list" >
          <li className="item">Geringe Stellfläche</li>
          <li className="item">Mit und ohne integrierter Freikühlung</li>
          <li className="item">Für Außentemperaturen bis +55°C</li>
          <li className="item">Für Außen- und Innenaufstellung erhältlich</li>
          <li className="item">Betriebsbereit bei Anlieferung</li>
          <li className="item">Automatische Freikühlschaltung für verringerten Energieverbrauch</li>
          <li className="item">Robustes Gehäuse für Außenaufstellung</li>
          <li className="item">Geringe Schallemissionen</li>
          <li className="item">Wetterfest und Langlebig</li>
          <li className="item">Erhöhte Betriebssicherheit</li>

        </ul>

      </section>

      <section className="features">
        <h2>HAUPTMERKMALE</h2>
        <p className="features-item">25 verschiedene Modelle von 6 kW bis 600 kW Kühlleistung</p>
        <p className="features-item">Volumenströme von 1,5 m³/h bis 140 m³/h</p>
        <p className="features-item"> Auswahl aus 50 verschiedenen Prozesspumpen im Hochfluss- und Hochdruckbereich</p>
        <p className="features-item">Kompakteinheiten mit integrierten Pumpen, Drucktanks, Filtern,Steuerungen (optional mit Reservepumpe)</p>
        <p className="features-item"> Mikrochannel Verflüssiger für höchste Energieeffizienz</p>
        <p className="features-item">Mit optionalen Kompressor Schallschutzummantelungen</p>
        <p className="features-item"> Schallmindernde Ventilatortechnik erhältlich</p>
        <p className="features-item"> Scroll, Multiscroll und Schraubenkompressoren (optional mit Frequenzumrichter)erhältlich </p>
        <p className="features-item">Automatische Leistungssteuerung für Prozesse mit variabler Kühllast</p>
        <p className="features-item"> Kleine Kältemittelvolumen dank extrakompakter Bauweise</p>
        <p className="features-item">uswahl aus verschiedenen Low-GWP Kältemitteln, u.a. R513a, R1234ze und R290 (Propan)</p>
        <p className="features-item">Mit automatischen Glykol Nachfüllsystemem</p>
        <p className="features-item">Mit Remote HMI</p>
        <p className="features-item">Erhöhte Betriebssicherheit mit bis zu 4 Kühlkreisläufen pro Maschine</p>
      </section>

      <section className="photos">
        <h2>BILDER</h2>
      </section>

      <section className="technologies">
        <h2 className="technologies-h2">BESUCHER DIESER SEITE SUCHTEN AUCH OFT NACH:</h2>
        <ul className="technologies-list">
          <li className="technologies-item">GLYKOLWANNEN</li>
          <li className="technologies-item">WASSERAUFBEREITUNG</li>
          <li className="technologies-item">ROHRLEITUNGSBAU</li>
          <li className="technologies-item">WÄRMEMENGENMESSUNGEN</li>
          <li className="technologies-item">ANLAGELEASING</li>
        </ul>
      </section>

      <sectiion class="apointment">
        <h2>Jetzt Termin vereinbaren!</h2>
        <p>Gerne stehen wir Ihnen für eine individuelle Beratung telefonisch
          und vor Ort zur
          Verfügung und freuen
          uns über Ihre Kontaktaufnahme. Sprechen Sie uns an!
          Fragen Sie nach einem Rückruf oder kontaktieren Sie uns unter: info@elsasser-technik.de
        </p>
        <h2>Kontakt</h2>
      </sectiion>

      <footer>
        <adress>
          <ul>
            <li>
              <p>Elsässer Kältetechnik</p>
              <p>Königsallee 1440212 Düsseldorf</p>
            </li>
            <li>
              <p>Kontakt</p>
              <span>Telefon:</span>
              <a href="tel:+49 (0) 211 9232 3052">+49 (0) 211 9232 3052</a>
              <span>E-Mail:</span>
              <a href="mailto:info@elsasser-technik.de">info@elsasser-technik.de</a>
            </li>
          </ul>
        </adress>
        <p>Shortlinks</p>
        <ul>
          <li><a href="/kontakt">Kontakt</a></li>
          <li><a href="/rückruf vereinbarenkontakt">Rückruf vereinbaren</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
        </ul>
      </footer>
    </body>
  )
}

export default App;
